import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Cross2Icon, ImageIcon } from "@radix-ui/react-icons";
import { AtomicBlockUtils, EditorState } from "draft-js";
import Image from "next/image";
import React from "react";
import { type IToolbarProps } from "../editor.types";

export default function ImageTool(props: IToolbarProps) {
  const [file, setFile] = React.useState<File | null>(null);

  const [data, setData] = React.useState({
    url: "",
    alt: "",
    width: 200,
    height: 200,
  });

  const { editorState, onChange } = props;

  // handle file change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];

    if (file !== undefined && file.type.startsWith("image/")) {
      const reader: FileReader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        const content: string = event.target?.result as string;
        setFile(file); // Set file content
        setData((s) => ({ ...s, url: content }));
      };

      reader.readAsDataURL(file); // Read file as data URL
    }
  };
  // set editor state

  const toggleImageBlock = () => {
    if (data.url !== undefined) {
      const contentState = editorState.getCurrentContent();
      const contentStateWithEntity = contentState.createEntity(
        "IMAGE",
        "IMMUTABLE",
        { ...data }
      );
      const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
      const newEditorState = EditorState.set(editorState, {
        currentContent: contentStateWithEntity,
      });
      const newEditorStateWithImage = AtomicBlockUtils.insertAtomicBlock(
        newEditorState,
        entityKey,
        " "
      );
      onChange(newEditorStateWithImage);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Popover>
      <PopoverTrigger className="text-sm px-2 text-muted-foreground hover:bg-primary/20 hover:text-foreground/80 h-8 rounded-sm flex items-center data-[state=open]:bg-primary/20 data-[state=open]:text-foreground/80">
        <ImageIcon className="h-4 w-4" />
      </PopoverTrigger>
      <PopoverContent className="w-96" align="center">
        <div>
          <div className="relative flex flex-col items-center justify-center p-4 w-full h-32 bg-muted rounded-lg text-center">
            {data.url !== "" ? (
              <Image
                src={data.url}
                alt={data.alt}
                width={data.width}
                height={data.height}
                className="w-full h-full object-contain"
              />
            ) : (
              <>
                <ImageIcon className="h-12 w-12 opacity-30" />
                <span className="text-sm text-muted-foreground">
                  Upload image
                </span>
              </>
            )}
            <input
              type="file"
              onChange={handleFileChange}
              className="absolute top-0 left-0 w-full h-full z-10 opacity-0"
            />
          </div>

          <span className="block text-center text-muted-foreground w-full py-1.5 text-xs">
            OR
          </span>

          <div className="flex flex-col gap-2">
            <Input
              type="text"
              name="url"
              value={data.url}
              onChange={handleChange}
              placeholder="Image URL"
            />
            <Input
              type="text"
              name="alt"
              placeholder="Image Alt Text"
              value={data.alt}
              onChange={handleChange}
            />
            <div className="grid grid-cols-12 gap-2">
              <Input
                type="number"
                name="width"
                placeholder="Width"
                className="col-span-5"
                value={data.width}
                onChange={handleChange}
              />
              <div className="col-span-2">
                <div className="flex items-center justify-center h-full">
                  <Cross2Icon />
                </div>
              </div>
              <Input
                type="number"
                name="height"
                placeholder="Height"
                className="col-span-5"
                value={data.height}
                onChange={handleChange}
              />
            </div>

            <Button type="button" onClick={toggleImageBlock} className="mt-2.5">
              Insert
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
