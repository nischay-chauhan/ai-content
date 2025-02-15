import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface HistoryProps {
  item: {
    id: number;
    formData: string;
    aiResponse: string | null;
    templateSlug: string | null;
    createdBy: string | null;
    createdAt: Date | null;
  }
}

const ShowHistory = ({ item }: HistoryProps) => {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">History Details</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableCaption>History entry for ID: {item.id}</TableCaption>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">ID</TableCell>
              <TableCell>{item.id}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Created By</TableCell>
              <TableCell>{item.createdBy}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Created At</TableCell>
              <TableCell>{item.createdAt && new Date(item.createdAt).toLocaleString()}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Template Slug</TableCell>
              <TableCell>{item.templateSlug}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Form Data</TableCell>
              <TableCell className="max-w-md overflow-hidden overflow-ellipsis">{item.formData}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">AI Response</TableCell>
              <TableCell className="max-w-md overflow-hidden overflow-ellipsis">{item.aiResponse}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export default ShowHistory