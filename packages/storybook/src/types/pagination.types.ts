// src/types/pagination.types.ts
export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    maxVisible?: number;  // 한 번에 보여질 페이지 숫자 개수
    showEdges?: boolean;  // 처음/마지막 페이지 버튼 표시 여부
  }
  
export interface PaginationEvents {
    (e: 'update:page', page: number): void;
}