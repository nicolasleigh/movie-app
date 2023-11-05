import { useCallback, useEffect } from 'react';
import { useStyle, useToast } from '../hooks';
import { useDropzone } from 'react-dropzone';
import { BiMoviePlay } from 'react-icons/bi';
import { ToastContainer, toast } from 'react-toastify';
import { useFormContext } from 'react-hook-form';

// const maxSize = 1222; // Test!
// const maxSize = 1073741824; // 1GB
const maxSize = 419430400; // 400MB
const maxFileNumber = 1;
export default function UploadVideoComponent({ name }) {
    const { labelStyle, inputStyle, formItemStyle } = useStyle();
    const { register, unregister, setValue, watch } = useFormContext();
    const files: File[] = watch(name);

    const onDrop = useCallback(
        (acceptedFiles) => {
            setValue(name, acceptedFiles, { shouldValidate: true });
        },
        [setValue, name]
    );
    const {
        getRootProps,
        getInputProps,
        isDragAccept,
        isDragActive,
        isDragReject,
        acceptedFiles,
        fileRejections,
    } = useDropzone({
        maxFiles: maxFileNumber,
        onDrop,
        noClick: true,
        accept: {
            'video/*': [],
        },
        minSize: 0,
        maxSize: maxSize,
    });

    const isFileTooLarge =
        fileRejections.length > 0 && fileRejections[0].file.size > maxSize;

    const isFileTooMany = fileRejections.length > maxFileNumber;

    const acceptedFileItems = acceptedFiles.map((file) => (
        <li key={file.path}>{file.path}</li>
    ));

    const fileRejectionItems = fileRejections.map(({ file, errors }) => {
        return (
            <li key={file.path}>
                {file.path}
                {/* <ul>
                    {errors.map((e) => (
                        <li key={e.code}>{e.message}</li>
                    ))}
                </ul> */}
            </li>
        );
    });

    useEffect(() => {
        register(name);
        return () => {
            unregister(name);
        };
    }, [register, unregister, name]);

    return (
        <div className={formItemStyle}>
            <label className={labelStyle}>Upload Video</label>
            <div className='flex flex-col items-center justify-center w-full'>
                <label
                    htmlFor='uploadVideo'
                    {...getRootProps()}
                    className='flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'
                >
                    {!isDragActive && !(acceptedFileItems.length > 0) ? (
                        <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                            <div className='w-8 h-8 text-3xl mb-4 text-gray-500 dark:text-gray-400'>
                                <BiMoviePlay />
                            </div>
                            <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
                                <span className='font-semibold'>
                                    Click to upload
                                </span>{' '}
                                or drag and drop
                            </p>
                            <p className='text-xs text-gray-500 dark:text-gray-400'>
                                MP4, MKV, AVI
                            </p>
                        </div>
                    ) : (
                        <ul className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
                            {acceptedFileItems}
                        </ul>
                    )}

                    {isFileTooLarge &&
                        toast.error('File too large!', {
                            toastId: 'file-too-large',
                            position: 'top-right',
                            autoClose: 3000,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: 'colored',
                        })}
                    {isFileTooMany &&
                        toast.error('File too many!', {
                            toastId: 'file-too-many',
                            position: 'top-right',
                            autoClose: 3000,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: 'colored',
                        })}
                    {isDragReject &&
                        toast.error('File rejected!', {
                            toastId: 'file-rejected',
                            position: 'top-right',
                            autoClose: 3000,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: 'colored',
                        })}
                    <input
                        name={name}
                        id='uploadVideo'
                        // type='file'
                        className='hidden'
                        {...getInputProps()}
                    />
                </label>
                {/* {progress > 0 && (
                    <div className='w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700'>
                        <div
                            style={{ width: `${progress}%` }}
                            className={`bg-indigo-600 h-2.5 rounded-full dark:bg-indigo-500 `}
                        ></div>
                    </div>
                )} */}

                {/* <aside>
                    <h4>Accepted files</h4>
                    <ul>{acceptedFileItems}</ul>
                    <h4>Rejected files</h4>
                    <ul>{fileRejectionItems}</ul>
                </aside> */}
            </div>
        </div>
    );
}
