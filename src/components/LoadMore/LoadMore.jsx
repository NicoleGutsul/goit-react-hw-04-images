import { LoadMore } from "./LoadMore.styled";

export const ButtonLoadMore = ({onClick}) => {
    return <LoadMore onClick={() => onClick()}>Load More</LoadMore>;
};