import { Button } from '@/components/ui/button'; // Replace with the actual import path for your Button component
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Icon library for next/previous arrows

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  className?: string;
}

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
  className = '',
}: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) return null;

  const getPages = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className={`flex items-center justify-center space-x-2 ${className}`}>
      <Button
        variant="ghost"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="flex items-center"
      >
        <ChevronLeft className="w-4 h-4" />
      </Button>
      {getPages().map((page) => (
        <Button
          key={page}
          variant={page === currentPage ? 'default' : 'ghost'}
          onClick={() => onPageChange(page)}
          className={`w-10 h-10 ${
            page === currentPage ? 'bg-black text-white' : 'text-gray-800'
          }`}
        >
          {page}
        </Button>
      ))}
      <Button
        variant="ghost"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="flex items-center"
      >
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default Pagination;
