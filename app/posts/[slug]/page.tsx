import Header from "@/components/Header";
import MDXComponents from "@/utils/mdxcomponents";
import { allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
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
      <div className="w-[70%] h-fit flex flex-col pb-32 ">
        <Header />
        <div className="px-32 flex flex-col items-center">
          <p className="text-slate-500 mb-4 mt-24">
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </p>
          <h1 className="text-slate-900 text-center text-5xl/snug font-bold">
            {post.title}
          </h1>
          <article>
            <MDXContent components={{ ...MDXComponents }} />
          </article>
        </div>
      </div>
    </div>
  );
};

export default PostLayout;
