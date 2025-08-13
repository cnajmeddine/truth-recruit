import { JobPosting } from '@/types';
import { Card, CardHeader, CardContent, Badge } from '@/components/ui';
import { formatDate } from '@/utils';

interface JobPostingsTableProps {
  jobPostings: JobPosting[];
  title?: string;
  maxRows?: number;
}

export const JobPostingsTable = ({ 
  jobPostings, 
  title = "Recent Job Postings",
  maxRows = 10 
}: JobPostingsTableProps) => {
  const displayedJobs = jobPostings.slice(0, maxRows);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <Badge variant="secondary">
            {jobPostings.length} total posting{jobPostings.length !== 1 ? 's' : ''}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        {displayedJobs.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">Title</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">Department</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">Location</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">Posted</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">Level</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {displayedJobs.map((job) => (
                  <tr key={job.id} className="hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div className="font-medium text-gray-900 text-sm">
                        {job.title}
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {job.department}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        {job.location}
                        {job.isRemote && (
                          <Badge variant="primary" size="sm" className="ml-2">
                            Remote
                          </Badge>
                        )}
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {formatDate(job.postedDate)}
                    </td>
                    <td className="py-3 px-4 text-sm">
                      <Badge 
                        variant={
                          job.experienceLevel === 'Senior' ? 'primary' :
                          job.experienceLevel === 'Mid-level' ? 'secondary' :
                          'success'
                        }
                        size="sm"
                      >
                        {job.experienceLevel}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {jobPostings.length > maxRows && (
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-500">
                  Showing {maxRows} of {jobPostings.length} job postings
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            <svg className="w-12 h-12 mx-auto mb-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
            <p className="text-sm">No job postings found</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};