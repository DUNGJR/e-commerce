"use client";

import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { OrderColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

interface OrderClientProps {
  data: OrderColumn[];
}

export const OrderClient: React.FC<OrderClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();
  return (
    <>
      <Heading
        title={`Orders (${data.length})`}
        description="Manage orders for your store"
      ></Heading>

      <Separator></Separator>
      <DataTable searchKey="label" columns={columns} data={data}></DataTable>
      
    </>
  );
};
