import * as React from "react";

import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IconPhotoPlus } from "@tabler/icons-react";
import _ from "lodash";
import { type Variant } from "./product-variant";

interface IProps {
  data: Variant[];
}

interface ITableData {
  type: string;
  variants: Record<string, unknown>[];
}

export default function VariantTable({ data }: IProps) {
  const [groupBy, setGroupBy] = React.useState("COLOR");
  const [tableData, setTableData] = React.useState<ITableData>();

  React.useEffect(() => {
    const groupData = data.find((d) => d.type === "SIZE");

    if (!_.isEmpty(groupData)) {
      const obj: ITableData = { type: groupData.type, variants: [] };

      _.map(groupData.values, (d) => {
        return obj.variants.push({
          [_.toLower(groupData.type)]: d,
          variants: data.filter((v) => v.type !== groupData.type),
        });
      });

      setTableData(obj);
    }
  }, [data, groupBy]);

  return (
    <div>
      <Separator />
      {_.map(data, (variant: Variant, index: number) =>
        variant.type !== "" ? (
          <div key={index} className="mt-5">
            <h6 className="text-sm text-muted-foreground">{variant.type}</h6>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Image</TableHead>
                  <TableHead>price</TableHead>
                  <TableHead>action</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {_.map(variant.values, (value: string, idx: number) =>
                  value !== "" ? (
                    <TableRow key={idx}>
                      <TableCell> {value} </TableCell>
                      <TableCell>
                        <FileUploadInput />
                      </TableCell>
                      <TableCell> 24.25$ </TableCell>
                      <TableCell> ... </TableCell>
                    </TableRow>
                  ) : null
                )}
              </TableBody>
            </Table>
          </div>
        ) : null
      )}
    </div>
  );
}

function FileUploadInput() {
  return (
    <div className="relative">
      <input
        type="file"
        className="absolute top-0 left-0 w-full h-full opacity-0 z-10"
      />
      <IconPhotoPlus size={24} stroke={1.5} opacity={0.5} />
    </div>
  );
}
