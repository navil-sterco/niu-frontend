interface Props {
  onClick: () => void;
}

export default function LoadMoreButton({ onClick }: Props) {
  return (
    <div className="nsload_more">
      <a
        href="#"
        role="button"
        className="loadmore_links"
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
      >
        Load More...
      </a>
    </div>
  );
}
