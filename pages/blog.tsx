import Hero from "components/Hero";
import Repositories from "components/Repositories";
import Skills from "components/Skills";
import { useEffect, useState } from "react";
import Head from "next/head";
import 'tippy.js/dist/tippy.css';
import Tippy from "@tippyjs/react";
import Clips from "components/Clips";
import axios from "axios";
import Feedbacks from "components/Feedbacks";
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-csharp";
import "prismjs/components/prism-shell-session";
import "prismjs/components/prism-bash";
import moment from "moment";
import "moment-duration-format";


interface Props {
  mdxSource: MDXRemoteSerializeResult
}

function Blog({ t, blogData }: { t: any, blogData: any }) {
  useEffect(() => {
    Prism.highlightAll();
    moment.locale(t("lang"));
  }, []);
  return (
    <div className="pt-32">
      
      <Head>
        <title>{blogData?.title} | NullMan Portfolio</title>
        <meta name="description" content={blogData?.description} />
        <meta name="keywords" content={blogData?.tags.join(", ")} />
        <meta property="og:title" content={blogData?.title} />
        <meta property="og:description" content={blogData?.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nullman.dev" />
        <meta property="og:image" content={blogData.banner}/>
      </Head>
      <div className="flex justify-between px-4 ">
        <article className="mx-auto w-full format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header className="mb-4 lg:mb-6 not-format">
            <address className="flex items-center mb-6 not-italic">
              <div className="inline-flex items-center mr-3 text-sm text-white">
                <img
                  className="mr-4 w-16 h-16 rounded-full"
                  src="https://cdn.discordapp.com/avatars/716930725877907466/3f52414f57025c99e562c8db688de99b.png"
                  alt="iamnullman"
                />
                <div>
                  <a
                    href="#"
                    rel="author"
                    className="text-xl font-bold text-white"
                  >
                    NullMan (R. Enes)
                  </a>
                  <p className="text-base font-light text-400">
                    Web Developer
                  </p>
                </div>
              </div>
            </address>
          </header>
          <div className="mb-6 not-format">
            <p className="mb-2 text-lg leading-relaxed text-white">
              {t("lang") === "tr" ? blogData?.title_tr : blogData?.title}
            </p>
            <div className="flex items-center mb-4 text-sm text-gray-400">

              <i className="fas fa-eye mr-2" />
              <span className="text-gray-400">{blogData?.views}</span>

              <i className="fa fa-calendar ml-4 mr-2" />
              <span className="text-gray-400">
                {moment(blogData?.createdAt).fromNow()}
              </span>
            </div>
            <div className="flex space-x-2">
              {blogData?.tags.map((tag: any, key: any) => (
                <Tippy content={tag} key={key}>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium text-gray-400 cursor-pointer hover:scale-105 duration-500">
                    {tag}
                  </span>
                </Tippy>
              ))}
            </div>
            <div className="markdown-content py-16">
            {t("lang") === "tr" ? <MDXRemote {...blogData?.source_tr} /> :  <MDXRemote {...blogData.source} /> }
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

Blog.getInitialProps = async (ctx: any) => {
  const {data} = await axios.get(`https://nullman.dev/api/blog?id=${ctx.query.id}`);
  const source = data.content;
  const source_tr = data.content_tr;
  const mdxSource = await serialize(source);
  const mdxSource_tr = await serialize(source_tr);
  return {
      blogData: {
        source: mdxSource,
        source_tr: mdxSource_tr,
        title: data.title,
        title_tr: data.title_tr,
        tags: data.tags,
        views: data.views,
        comments: data.comments,
        createdAt: data.createdAt,
        banner: data.banner,
      }
  };
}

export default Blog;

