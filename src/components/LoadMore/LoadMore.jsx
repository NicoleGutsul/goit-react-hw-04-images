import { LoadMore } from "./LoadMore.styled";

export const ButtonLoadMore = ({onClick}) => {
    return <LoadMore type='button' onClick={() => onClick()}>Load More</LoadMore>;
};