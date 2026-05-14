import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

const VisitorCountInline = () => {
  const [views, setViews] = useState(null);
  const [error, setError] = useState(false);

  return (
    <div className="flex items-center gap-2 text-gray-600 mt-4 text-sm">
      <Eye className="w-4 h-4" />
      {error ? (
        <span>Error loading visitors</span>
      ) : views !== null ? (
        <span>{views} visitors so far</span>
      ) : (
        <span>Loading visitors...</span>
      )}
    </div>
  );
};

export default VisitorCountInline;
