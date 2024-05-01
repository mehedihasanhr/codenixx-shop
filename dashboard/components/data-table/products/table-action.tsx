import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IconDots, IconEdit, IconEye, IconTrash } from "@tabler/icons-react";
import { Button } from "../../ui/button";

export default function TableActionDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon-sm" variant="ghost">
          <IconDots size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <IconEye size={16} />
          <span className="px-1.5">Preview</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <IconEdit size={16} />
          <span className="px-1.5">Edit</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <IconTrash size={16} />
          <span className="px-1.5">Delate</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
