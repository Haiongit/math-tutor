import { useAuthStore } from "@/store/slices/auth.slice";
import {
  useTeacherChart,
} from "@/hooks/queries/dashboard/useTeacher";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { formatCurrency } from "@/lib/utils";
import { Loader2 } from "lucide-react";

// Interface for chart data
interface MonthlyData {
  month: number;
  year: number;
  revenue: number;
  ordersCount: number;
}

interface TeacherChartData {
  data: {
    monthlyData: MonthlyData[];
    totalRevenue: number;
    averageMonthlyRevenue: number;
  };
  message: string;
}

export default function ChartRevenue() {
  const { isTeacher, user } = useAuthStore();
  const { data: teacherDataChart, isLoading: isLoadingTeacher } = useTeacherChart(user?.id || "", 2025 , isTeacher);

  // Type assertion for the chart data
  const chartResponse = teacherDataChart as TeacherChartData | undefined;

  // Format data for chart
  const chartData = chartResponse?.data?.monthlyData?.map((item: MonthlyData) => ({
    month: item.month,
    monthName: getMonthName(item.month),
    revenue: item.revenue,
    ordersCount: item.ordersCount,
    formattedRevenue: formatCurrency(item.revenue),
  })) || [];

  if (isLoadingTeacher) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="animate-spin text-gray-400" size={48} />
        <span className="ml-2 text-gray-500">Đang tải dữ liệu biểu đồ...</span>
      </div>
    );
  }

  if (!chartResponse?.data?.monthlyData) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500">Không có dữ liệu để hiển thị</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-blue-600 mb-2">Tổng doanh thu năm</h3>
          <p className="text-2xl font-bold text-blue-800">
            {formatCurrency(chartResponse.data.totalRevenue)}
          </p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-green-600 mb-2">Doanh thu trung bình/tháng</h3>
          <p className="text-2xl font-bold text-green-800">
            {formatCurrency(chartResponse.data.averageMonthlyRevenue)}
          </p>
        </div>
      </div>

      {/* Revenue Chart (Bar) */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Biểu đồ doanh thu theo tháng</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="monthName"
                tick={{ fontSize: 12 }}
                angle={-45}
                textAnchor="end"
                height={60}
              />
              <YAxis
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => `${(value / 1000000).toFixed(0)}M`}
              />
              <Tooltip
                formatter={(value) => [formatCurrency(value as number), "Doanh thu"]}
                labelFormatter={(label) => `Tháng ${label}`}
              />
              <Bar dataKey="revenue" fill="#2F57EF" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Orders Count Chart */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Số lượng đơn hàng theo tháng</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="monthName"
                tick={{ fontSize: 12 }}
                angle={-45}
                textAnchor="end"
                height={60}
              />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg">
                        <p className="font-semibold text-gray-800">{`Tháng ${label}`}</p>
                        <p className="text-green-600">
                          {`Số đơn hàng: ${payload[0].value}`}
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar
                dataKey="ordersCount"
                fill="#10B981"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

// Helper function to get month name
function getMonthName(month: number): string {
  const months = [
    "T1", "T2", "T3", "T4", "T5", "T6",
    "T7", "T8", "T9", "T10", "T11", "T12"
  ];
  return months[month - 1] || "";
}