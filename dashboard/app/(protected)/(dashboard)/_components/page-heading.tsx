"use client";

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import _ from "lodash";
import { usePathname } from "next/navigation";
import React from "react";

interface IProps {
  heading: string;
}

export default function PageHeading(props: IProps) {
  const pathname = usePathname();
  const urls = pathname.split("/");

  const dropdownPaths = urls.length > 4 ? urls.slice(2, urls.length - 1) : [];
  const visiblePaths =
    urls.length > 4
      ? urls.slice(urls.length - 4, urls.length - 1)
      : urls.slice(1);

  const url = (path: string) => {
    const index = _.indexOf(urls, path);
    const newPaths = urls.slice(0, index + 1);
    const href = newPaths.join("/");
    return href;
  };

  return (
    <div>
      <h3>{props.heading}</h3>

      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/overviews">Home</BreadcrumbLink>
          </BreadcrumbItem>

          {dropdownPaths.length > 0 ? (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1">
                    <BreadcrumbEllipsis className="h-4 w-4" />
                    <span className="sr-only">Toggle menu</span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    <DropdownMenuItem>Documentation</DropdownMenuItem>
                    <DropdownMenuItem>Themes</DropdownMenuItem>
                    <DropdownMenuItem>GitHub</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </BreadcrumbItem>
            </>
          ) : null}

          {visiblePaths?.map((path, index) => (
            <React.Fragment key={index}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {visiblePaths.length - 1 === index ? (
                  <BreadcrumbPage>{_.startCase(path)}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={url(path)}>
                    {_.startCase(path)}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
