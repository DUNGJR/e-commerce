import { getGraph } from "@/actions/get-graph";
import { getSalesCount } from "@/actions/get-salescount";
import { getStockCount } from "@/actions/get-stock-count";
import { getTotalRevenue } from "@/actions/get-totalrevenue";
import { Overiew } from "@/components/overview";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import prismadb from "@/lib/prismadb";
import { formatter } from "@/lib/utils";
import { CreditCard, DollarSign } from "lucide-react";

interface DashboardPageProps {
  params: { storeId: string };
}

const DashboardPage: React.FC<DashboardPageProps> = async ({ params }) => {
  const totalRevenue = await getTotalRevenue(params.storeId);
  const salesCount = await getSalesCount(params.storeId)
    const stockCount = await getStockCount(params.storeId)
    const graphRevenue= await getGraph(params.storeId)
  return (

  <div className="flex-col">
    <div className="flex-1 space-y-4 p-8 pt-6">
      <Heading title="Dashboard" description="Tổng quan cửa hàng"></Heading>
      <Separator></Separator>
      <div className="grid gap-4 grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Tổng doanh thu</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground"></DollarSign>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatter.format(totalRevenue)}</div>
          </CardContent>
        </Card>
        <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">

          <CardTitle className="text-sm font-medium">Sales</CardTitle>
          <CreditCard className="h-4 w-4 text-muted-foreground"></CreditCard>
          
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+{salesCount}</div>
          </CardContent>
        </Card>
        <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">

          <CardTitle className="text-sm font-medium">Sản phẩm trong kho</CardTitle>
          <CreditCard className="h-4 w-4 text-muted-foreground"></CreditCard>
          
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stockCount}</div>
          </CardContent>
        </Card>

      </div>
<Card className="col-span-4">
<CardHeader>
  <CardTitle>Overview</CardTitle>
</CardHeader>
<CardContent>
  <Overiew data={graphRevenue}></Overiew>
</CardContent>
</Card>
    </div>
  </div>
  )
};
export default DashboardPage;
