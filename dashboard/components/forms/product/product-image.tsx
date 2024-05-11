import { Cross2Icon } from "@radix-ui/react-icons";
import { IconPhotoPlus } from "@tabler/icons-react";
import Image from "next/image";
import React, { useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "../../ui/button";

export interface FileWithPreview extends File {
  preview: string;
}

interface ProductImageInputProps {
  files: FileWithPreview[];
  onChange: React.Dispatch<React.SetStateAction<FileWithPreview[]>>;
  className?: string;
}

export default function ProductImageInput({
  files,
  onChange,
  className,
}: ProductImageInputProps) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles?.length !== 0) {
        onChange((previousFiles) => [
          ...previousFiles,
          ...acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          ),
        ]);
      }
    },
    [onChange]
  );

  const removeFile = (index: number) => {
    const removedFile = files[index];
    const updatedFiles = files.filter((_, i) => i !== index);
    onChange(updatedFiles);
    URL.revokeObjectURL(removedFile.preview);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  useEffect(() => {
    return () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  }, []);

  return (
    <>
      {files.map((file, index) => (
        <div key={index} className="relative col-span-4 h-48 rounded-lg group">
          <Button
            type="button"
            variant="destructive"
            size="icon-sm"
            onClick={() => removeFile(index)}
            className="rounded-full absolute right-1 top-1 shadow-md items-center justify-center hidden group-hover:flex"
          >
            <Cross2Icon />
          </Button>
          <Image
            src={file.preview}
            alt=""
            width={150}
            height={150}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      ))}
      <div
        {...getRootProps({
          className: `dropzone border-2 border-dashed w-48 h-48 rounded-lg flex items-center justify-center hover:bg-muted/30 bg-muted/20 hover:border-primary/30 ${className}`,
        })}
      >
        <input {...getInputProps()} />
        <IconPhotoPlus size={40} stroke={1.5} opacity={0.3} />
      </div>
    </>
  );
}
