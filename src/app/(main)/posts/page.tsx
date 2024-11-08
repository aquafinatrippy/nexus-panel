import { BackButton } from "@/components/common/BackButton";
import { PostsPagination } from "@/components/Posts/Pagination";
import { PostsTable } from "@/components/Posts/PostsTable";

const PostsPage = () => {
  return (
    <>
      <BackButton text="Back to Dashboard" link="/" />
      <PostsTable />
      <PostsPagination />
    </>
  );
};

export default PostsPage;
