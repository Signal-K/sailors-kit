"use client"

import { useEffect, useState } from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { $getRoot, $getSelection } from 'lexical';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import ToolbarPlugin from "@/ui/Content/ToolbarPlugin";
import TreeViewPlugin from "@/ui/Content/TreeViewPlugin";
import ExampleTheme from "@/ui/Content/ExampleTheme";
import { $generateHtmlFromNodes } from '@lexical/html';

export default function CreateBaseClassification(assetMentioned: any) {
    const supabase = useSupabaseClient();
    const session = useSession();

    const [content, setContent] = useState<string>("");
    const [uploads, setUploads] = useState<string[]>([]);

    const [isUploading, setIsUploading] = useState(false);


    async function createPost() {

        const editorState = $getRoot() //.serializeToJSON();
        // const content = $generateHtmlFromNodes(editorState);

        const { data: classification, error } = await supabase
            .from("classifications")
            .insert({
                author: session?.user?.id,
                content,
                media: uploads,
            })
            .single();

        if (error) {
            console.error("Error creating classification: ", error.message);
            return;
        };


        // }

        alert(`Post created`);
        setContent('');
    };

    async function addMedia(e: any) {
        const files = e.target.files;
        if (files.length > 0 && session) {
            setIsUploading(true);
            for (const file of files) {
                const fileName = Date.now() + session.user.id + file.name;
                const result = await supabase.storage
                    .from("media")
                    .upload(fileName, file);

                if (result.data) {
                    const url = process.env.NEXT_PUBLIC_SUPABASE_URL + '/storage/v1/object/public/media' + result.data.path;
                    setUploads(prevUploads => [...prevUploads, url]);
                } else {
                    console.log(result);
                };
            };
            setIsUploading(false);
        };
    };

    return (
        <div className="w-5/6 mx-auto">
            <div className="flex gap-2 mx-5 mt-5 pb-3">
                <div>
                    {/* <img src={userProfile?.avatar_url} width='60px' height='60px' /> */}
                </div>
                <div className="grow p-3 rounded-xl -100">
                </div>
            </div>
            {isUploading && (
                <div className="text-center">
                    <p>Uploading...</p>
                </div>
            )}
            <div className="flex gap-2 mt-4">
                {uploads.map(upload => (
                    <div key={upload} className="w-auto h-48">
                        <img src={upload} className="w-auto h-48 rounded-md" />
                    </div>
                ))}
            </div>
            <div className="text-center mt-4">
                <label className="flex gap-1 items-center cursor-pointer">
                    <input type="file" className="hidden" onChange={addMedia} />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
                    </svg>
                    <span className="hidden md:block">Media</span>
                </label>
                <button onClick={createPost} className="text-black px-2 py-1 rounded-md bg-blue-500 hover:bg-blue-600">Share</button>
            </div>
        </div>
    );
};