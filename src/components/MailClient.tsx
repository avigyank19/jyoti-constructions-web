import React, { useEffect, useState } from 'react';
import { initAuth, googleSignIn, logout } from '../lib/auth';
import { User } from 'firebase/auth';
import { Mail, LogOut, Send, Inbox, RefreshCw, Trash2, X, CheckCircle2, AlertCircle } from 'lucide-react';

interface EmailMessage {
  id: string;
  threadId: string;
  snippet: string;
  subject: string;
  from: string;
  date: string;
}

export function MailClient() {
  const [needsAuth, setNeedsAuth] = useState(true);
  const [token, setToken] = useState<string | null>(null);
  const [, setUser] = useState<User | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const [emails, setEmails] = useState<EmailMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [composeOpen, setComposeOpen] = useState(false);
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [sending, setSending] = useState(false);
  const [statusBanner, setStatusBanner] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = initAuth(
      (u, t) => {
        setUser(u);
        setToken(t);
        setNeedsAuth(false);
      },
      () => {
        setNeedsAuth(true);
        setUser(null);
        setToken(null);
      }
    );
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!needsAuth && token && isOpen) {
      fetchEmails();
    }
  }, [needsAuth, token, isOpen]);

  const handleLogin = async () => {
    setIsLoggingIn(true);
    setStatusBanner(null);
    try {
      const result = await googleSignIn();
      if (result) {
        setToken(result.accessToken);
        setUser(result.user);
        setNeedsAuth(false);
      }
    } catch (err) {
      console.error('Login failed:', err);
      setStatusBanner({ type: 'error', text: 'Authentication could not be completed.' });
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    setNeedsAuth(true);
    setUser(null);
    setToken(null);
    setEmails([]);
  };

  const fetchEmails = async () => {
    if (!token) return;
    setIsLoading(true);
    try {
      const res = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages?maxResults=5&q=in:inbox', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();

      if (data.messages && data.messages.length > 0) {
        const fullMessages = await Promise.all(
          data.messages.map(async (msg: { id: string }) => {
            const detailRes = await fetch(
              `https://gmail.googleapis.com/gmail/v1/users/me/messages/${msg.id}?format=metadata&metadataHeaders=Subject&metadataHeaders=From&metadataHeaders=Date`,
              {
                headers: { Authorization: `Bearer ${token}` },
              }
            );
            const detail = await detailRes.json();

            const getHeader = (name: string) => {
              const header = detail.payload?.headers?.find(
                (h: { name: string; value: string }) => h.name.toLowerCase() === name.toLowerCase()
              );
              return header ? header.value : 'Unknown';
            };

            return {
              id: detail.id,
              threadId: detail.threadId,
              snippet: detail.snippet,
              subject: getHeader('Subject'),
              from: getHeader('From'),
              date: getHeader('Date'),
            };
          })
        );
        setEmails(fullMessages);
      } else {
        setEmails([]);
      }
    } catch (error) {
      console.error('Error fetching emails:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!token) return;
    try {
      await fetch(`https://gmail.googleapis.com/gmail/v1/users/me/messages/${id}/trash`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
      });
      setConfirmDeleteId(null);
      fetchEmails();
    } catch (error) {
      console.error('Error deleting email:', error);
      setStatusBanner({ type: 'error', text: 'Failed to move message to trash.' });
    }
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) return;

    setSending(true);
    setStatusBanner(null);
    try {
      const message = [`To: ${to}`, `Subject: ${subject}`, '', body].join('\n');

      const encodedMessage = btoa(message).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

      await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ raw: encodedMessage }),
      });

      setComposeOpen(false);
      setTo('');
      setSubject('');
      setBody('');
      setStatusBanner({ type: 'success', text: 'Email dispatched successfully.' });
    } catch (error) {
      console.error('Error sending email:', error);
      setStatusBanner({ type: 'error', text: 'Failed to dispatch email.' });
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open Company Webmail"
        className="fixed bottom-5 right-5 w-11 h-11 bg-slate-900 hover:bg-sky-800 text-white border border-slate-700 rounded-md shadow-lg flex items-center justify-center transition-colors z-40 cursor-pointer"
      >
        <Mail className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-5 w-96 max-w-[calc(100vw-2.5rem)] bg-white rounded-lg shadow-2xl overflow-hidden z-50 border border-slate-200 flex flex-col max-h-[540px]">
          <div className="bg-slate-900 text-white px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-sky-400" />
              <h3 className="font-display font-bold text-sm">Executive Webmail</h3>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close webmail"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {statusBanner && (
            <div
              className={`px-4 py-2 text-xs font-medium flex items-center justify-between ${
                statusBanner.type === 'success'
                  ? 'bg-emerald-50 text-emerald-800 border-b border-emerald-200'
                  : 'bg-red-50 text-red-800 border-b border-red-200'
              }`}
            >
              <span className="flex items-center gap-1.5">
                {statusBanner.type === 'success' ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                ) : (
                  <AlertCircle className="w-3.5 h-3.5 text-red-600" />
                )}
                {statusBanner.text}
              </span>
              <button
                type="button"
                onClick={() => setStatusBanner(null)}
                className="text-slate-500 hover:text-slate-800"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          <div className="flex-1 overflow-y-auto bg-slate-50 relative p-4">
            {needsAuth ? (
              <div className="flex flex-col items-center justify-center h-full py-10 text-center space-y-5">
                <div className="w-12 h-12 bg-slate-100 border border-slate-200 rounded-md flex items-center justify-center text-slate-700">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-900 text-base">Authorized Portal</h4>
                  <p className="text-slate-500 text-xs mt-1 max-w-[240px] mx-auto">
                    Sign in with Google Workspace to access Jyoti Constructions inbox.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleLogin}
                  disabled={isLoggingIn}
                  className="w-full max-w-[220px] bg-white border border-slate-300 rounded-md hover:bg-slate-50 transition-colors flex items-center justify-center px-3 py-2 disabled:opacity-50 cursor-pointer"
                >
                  <div className="w-4 h-4 mr-2.5">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-full h-full">
                      <path
                        fill="#EA4335"
                        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                      />
                      <path
                        fill="#4285F4"
                        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                      />
                      <path
                        fill="#34A853"
                        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                      />
                    </svg>
                  </div>
                  <span className="text-slate-700 font-medium text-xs whitespace-nowrap">Sign in with Google</span>
                </button>
              </div>
            ) : (
              <div className="flex flex-col h-full">
                {!composeOpen ? (
                  <>
                    <div className="flex justify-between items-center mb-3 pb-2 border-b border-slate-200">
                      <div className="flex items-center gap-1.5 text-xs text-slate-600 font-semibold">
                        <Inbox className="w-3.5 h-3.5" /> Inbox
                      </div>
                      <button
                        type="button"
                        onClick={fetchEmails}
                        aria-label="Refresh emails"
                        className="p-1 text-slate-500 hover:text-slate-900 transition-colors"
                      >
                        <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
                      </button>
                    </div>

                    <div className="space-y-2.5 mb-14">
                      {isLoading && emails.length === 0 ? (
                        <div className="text-center py-8 text-xs text-slate-500">Loading messages...</div>
                      ) : emails.length > 0 ? (
                        emails.map((email) => (
                          <div
                            key={email.id}
                            className="bg-white p-3 rounded border border-slate-200 relative group"
                          >
                            <div className="flex justify-between items-start mb-1">
                              <span className="font-semibold text-slate-900 text-xs truncate pr-4">
                                {email.from.split('<')[0]}
                              </span>
                              <span className="text-[11px] font-mono text-slate-400 whitespace-nowrap">
                                {new Date(email.date).toLocaleDateString(undefined, {
                                  month: 'short',
                                  day: 'numeric',
                                })}
                              </span>
                            </div>
                            <h5 className="text-xs font-medium text-slate-800 truncate mb-1">{email.subject}</h5>
                            <p className="text-xs text-slate-500 line-clamp-2">{email.snippet}</p>

                            {confirmDeleteId === email.id ? (
                              <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-end gap-2">
                                <button
                                  type="button"
                                  onClick={() => setConfirmDeleteId(null)}
                                  className="px-2 py-0.5 text-[11px] text-slate-600 hover:text-slate-900"
                                >
                                  Cancel
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleDelete(email.id)}
                                  className="px-2 py-0.5 text-[11px] bg-red-600 text-white rounded"
                                >
                                  Confirm Trash
                                </button>
                              </div>
                            ) : (
                              <button
                                type="button"
                                onClick={() => setConfirmDeleteId(email.id)}
                                className="absolute top-2 right-2 p-1 bg-slate-100 text-slate-600 rounded opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-50 hover:text-red-600"
                                title="Move to Trash"
                              >
                                <Trash2 className="w-3 h-3" />
                              </button>
                            )}
                          </div>
                        ))
                      ) : (
                        <div className="text-center py-8 text-xs text-slate-500">No messages in inbox.</div>
                      )}
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-white border-t border-slate-200 flex justify-between items-center">
                      <button
                        type="button"
                        onClick={handleLogout}
                        className="text-xs font-medium text-slate-500 hover:text-red-600 flex items-center gap-1 transition-colors"
                      >
                        <LogOut className="w-3.5 h-3.5" /> Sign out
                      </button>
                      <button
                        type="button"
                        onClick={() => setComposeOpen(true)}
                        className="bg-slate-900 hover:bg-sky-800 text-white text-xs font-semibold py-1.5 px-3.5 rounded flex items-center gap-1.5 transition-colors"
                      >
                        <Send className="w-3.5 h-3.5" /> Compose
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col h-full bg-white -m-4 p-4">
                    <div className="flex justify-between items-center mb-3 pb-2 border-b border-slate-100">
                      <h4 className="font-display font-bold text-sm text-slate-900">New Message</h4>
                      <button
                        type="button"
                        onClick={() => setComposeOpen(false)}
                        className="text-slate-400 hover:text-slate-800"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <form onSubmit={handleSend} className="flex flex-col flex-1 gap-2.5">
                      <input
                        type="email"
                        placeholder="Recipient email"
                        required
                        value={to}
                        onChange={(e) => setTo(e.target.value)}
                        className="w-full text-xs border-b border-slate-200 py-2 outline-none focus:border-sky-700 transition-colors"
                      />
                      <input
                        type="text"
                        placeholder="Subject"
                        required
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full text-xs border-b border-slate-200 py-2 outline-none focus:border-sky-700 transition-colors"
                      />
                      <textarea
                        placeholder="Message content..."
                        required
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        className="w-full flex-1 text-xs py-2 outline-none resize-none min-h-[140px]"
                      />

                      <div className="mt-auto pt-3 border-t border-slate-100 flex justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => setComposeOpen(false)}
                          className="px-3 py-1.5 text-xs text-slate-600 hover:text-slate-900"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          disabled={sending}
                          className="bg-slate-900 hover:bg-sky-800 text-white text-xs font-semibold py-1.5 px-4 rounded flex items-center gap-1.5 transition-colors disabled:opacity-70"
                        >
                          {sending ? 'Sending...' : <><Send className="w-3.5 h-3.5" /> Send</>}
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
