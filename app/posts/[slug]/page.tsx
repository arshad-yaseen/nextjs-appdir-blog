import Header from "@/components/Header";
import { allPosts } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";

export const generateStaticParams = async () =>
  allPosts.map((post: any) => ({ slug: post._raw.flattenedPath }));
export const generateMetadata = ({ params }: any) => {
  const post = allPosts.find(
    (post: any) => post._raw.flattenedPath === params.slug
  );
  return { title: post?.title, description: post?.description };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find(
    (post: any) => post._raw.flattenedPath === params.slug
  );

  let MDXContent;

  if (!post) {
    return <div>404</div>;
  } else {
    MDXContent = getMDXComponent(post!.body.code);
  }

  return (
    <div className="w-full h-screen flex justify-center">
      <div className="w-[70%] h-full flex flex-col ">
        <Header />
        <h1>{post.title}</h1>
        <p>{post.description}</p>
        <article>
          <MDXContent />
        </article>
      </div>
    </div>
  );
};

export default PostLayout;
