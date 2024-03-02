import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import moment from 'moment';
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FileListContext } from '@/app/_context/FileListContext';

export interface FILE {
    archive: boolean;
    createdBt: string;
    document: string;
    fileName: string;
    teamId: string;
    whiteboard: string;
    _id: string;
    _creationTime: number;
}

function FileList() {
    const { fileList_, setFileList_ } = useContext(FileListContext);
    const [fileList, setFileList] = useState<any>();
    const [loading, setLoading] = useState(false);
    const { user }: any = useKindeBrowserClient();
    const router = useRouter();

    useEffect(() => {
        setLoading(true);
        fileList_ && setFileList(fileList_);
        setLoading(false);
    }, [fileList_]);

    return (
        <>
            {loading && <p>Loading...</p>}
            {fileList?.length > 0 ? (
                <h1 className='md:text-3xl  mt-4 ml-4 sm:ml-2   items-center sm:text-2xl text-xl  w-56 truncate text-black font-semibold '>{user?.given_name}&#39;s Files</h1>
            ) : (
                <></>
            )}
            <div className='mt-4 ml-2'>
                {fileList?.length > 0 ? (
                    <div className="overflow-x-auto no-scrollbar">
                        <table className="w-full divide-y-2 divide-gray-200 bg-white text-sm">
                            <thead className="ltr:text-left rtl:text-right">
                                <tr>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">File Name</td>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Created At</td>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Edited</td>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Author</td>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {fileList &&
                                    fileList.map((file: FILE, index: number) => (
                                        <tr
                                            key={index}
                                            className="odd:bg-gray-50 cursor-pointer"
                                            onClick={() => router.push('/workspace/' + file._id)}>
                                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{file.fileName}</td>
                                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                                {moment(file._creationTime).format('DD MMM YYYY')}
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                                {moment(file._creationTime).format('DD MMM YYYY')}
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user && <p>{user.given_name}</p>}</td>
                                            <td className="whitespace-nowrap px-4 py-2 text-gray-700"></td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className='flex items-center flex-col justify-center mt-48'>
                        <Image src="/empty.png" width={400} height={400} alt="empty" />
                        <p className='text-3xl font-semibold mt-2'>Nothing to show</p>
                    </div>
                )}
            </div>
        </>
    );
}

export default FileList;
