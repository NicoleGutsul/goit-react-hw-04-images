import { LoadMore } from "./LoadMoreBtn.styled";

export const LoadMoreBtn = ({onLoadMore}) => {
    return <LoadMore type="button" onClick={onLoadMore}>Load More</LoadMore>;
};