import React, { useEffect, useState } from 'react';
import { account, database, query } from '../lib/appwrite';
import { ArrowUp, ArrowDown, ArrowUpDown } from 'lucide-react';

const AdminDashboardPage: React.FC = () => {
  const [documents, setDocuments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [sortField, setSortField] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [search, setSearch] = useState('');
  const pageSize = 10;

  const handleLogout = async () => {
    await account.deleteSession('current');
    localStorage.removeItem('admin-auth');
    window.location.href = '/admin/login';
  };

  useEffect(() => {
    async function fetchDocuments() {
      setLoading(true);
      setError('');
      try {
        const offset = (page - 1) * pageSize;
        let queries = [
          query.offset(offset),
          query.limit(pageSize)
        ];
        if (search.trim()) {
          // Search by name, university, branch, or email
          queries.push(query.or([
            query.search('name', search),
            query.search('university', search),
            query.search('branch', search),
            query.search('email', search)
          ]));
        }
        if (sortField) {
          queries.push(sortOrder === 'asc' ? query.orderAsc(sortField) : query.orderDesc(sortField));
        } else {
          queries.push(query.orderDesc('$createdAt'));
        }
        const res = await database.listDocuments(
          '68dbc5a7001e86beb194',
          'eligibility',
          queries
        );
        setDocuments(res.documents || []);
        setTotal(res.total || 0);
      } catch (err: any) {
        setError(err?.message || 'Failed to fetch documents');
      }
      setLoading(false);
    }
    fetchDocuments();
  }, [page, sortField, sortOrder, search]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-primary-100 to-accent-100 text-primary-900 flex flex-col">
      <header className="p-6 bg-white border-b border-primary-200 flex justify-between items-center shadow">
        <h1 className="text-3xl font-bold text-primary-900">Admin Dashboard</h1>
        <button
          className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 text-white font-semibold"
          onClick={handleLogout}
        >
          Logout
        </button>
      </header>
      <main className="flex-1 p-8">
        <div className="bg-white rounded-xl p-8 shadow-md border border-primary-200">
          <h2 className="text-xl font-semibold mb-4 text-primary-900">Eligibility Submissions</h2>
          <div className="mb-6 flex justify-end">
            <input
              type="text"
              value={search}
              onChange={e => { setSearch(e.target.value); setPage(1); }}
              placeholder="Search by name, university, branch, email..."
              className="w-full max-w-xs p-2 border border-primary-300 rounded focus:outline-none focus:ring-2 focus:ring-accent-500 text-primary-900"
            />
          </div>
          {loading ? (
            <p className="text-primary-800">Loading...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-primary-200 rounded-xl">
                  <thead className="bg-primary-100">
                    <tr>
                      {[
                        { key: 'university', label: 'University' },
                        { key: 'branch', label: 'Branch' },
                        { key: 'reason', label: 'Reason' },
                        { key: 'name', label: 'Name' },
                        { key: 'phone', label: 'Phone' },
                        { key: 'email', label: 'Email' },
                        { key: 'papers_passed', label: 'Papers Passed' },
                        { key: '$createdAt', label: 'Created At' }
                      ].map(col => (
                        <th key={col.key} className="px-4 py-2 text-left">
                          <div className="flex items-center gap-1">
                            <span>{col.label}</span>
                            <button
                              type="button"
                              className="text-xs px-1 py-0.5 rounded bg-primary-200 hover:bg-primary-300 text-primary-900 flex items-center"
                              onClick={() => {
                                if (sortField === col.key) {
                                  setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
                                } else {
                                  setSortField(col.key);
                                  setSortOrder('asc');
                                }
                              }}
                              aria-label={`Sort by ${col.label}`}
                            >
                              {sortField === col.key ? (
                                sortOrder === 'asc' ? <ArrowUp size={16} /> : <ArrowDown size={16} />
                              ) : (
                                <ArrowUpDown size={16} />
                              )}
                            </button>
                          </div>
                        </th>
                      ))}
                      <th className="px-4 py-2 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {documents.map(doc => (
                      <tr key={doc.$id} className="border-b border-primary-100 hover:bg-primary-50">
                        <td className="px-4 py-2">{doc.university}</td>
                        <td className="px-4 py-2">{doc.branch}</td>
                        <td className="px-4 py-2">{doc.reason}</td>
                        <td className="px-4 py-2">{doc.name}</td>
                        <td className="px-4 py-2">{doc.phone}</td>
                        <td className="px-4 py-2">{doc.email}</td>
                        <td className="px-4 py-2">{doc.papers_passed}</td>
                        <td className="px-4 py-2">{doc.$createdAt ? new Date(doc.$createdAt).toLocaleString() : ''}</td>
                        <td className="px-4 py-2">
                          <div className="flex gap-2">
                            <a
                              href={`mailto:${doc.email}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-accent-500 hover:bg-accent-600 text-white px-2 py-1 rounded text-xs font-semibold"
                            >Mail</a>
                            <a
                              href={`tel:${doc.phone}`}
                              className="bg-primary-500 hover:bg-primary-600 text-white px-2 py-1 rounded text-xs font-semibold"
                            >Call</a>
                            <a
                              href={`https://wa.me/${doc.phone}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold"
                            >WhatsApp</a>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* Pagination Controls */}
              <div className="flex justify-between items-center mt-6">
                <button
                  className="px-4 py-2 bg-primary-100 text-primary-900 rounded disabled:opacity-50"
                  onClick={() => setPage(page - 1)}
                  disabled={page === 1}
                >
                  Previous
                </button>
                <span className="text-primary-800">Page {page} of {Math.max(1, Math.ceil(total / pageSize))}</span>
                <button
                  className="px-4 py-2 bg-primary-100 text-primary-900 rounded disabled:opacity-50"
                  onClick={() => setPage(page + 1)}
                  disabled={page * pageSize >= total}
                >
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboardPage;
