"use client";

import {
  AssignmentTurnedInOutlined,
  ShoppingCartOutlined,
  TrendingUpOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Grid2,
  LinearProgress,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

const DashboardPage = () => {
  return (
    <Box>
      {/* Header banner similar to TikTok Shop */}
      <Paper
        sx={{
          background: "linear-gradient(135deg, #1d1d41 0%, #7b68ee 100%)",
          color: "white",
          p: 4,
          borderRadius: 2,
          mb: 3,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Typography variant="h4" fontWeight="bold" mb={1}>
          Phát triển doanh nghiệp của bạn cùng với TekCommerce
        </Typography>
        <Typography variant='body1' component={'div'}>
          Tham gia cộng đồng kinh doanh bất động sản hàng đầu Việt Nam để xây dựng doanh nghiệp của bạn và để khách hàng khám phá cùng với những sản phẩm của bạn.
        </Typography>
        
        {/* Decorative elements */}
        <Box
          sx={{
            position: "absolute",
            right: -50,
            top: -50,
            width: 200,
            height: 200,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.1)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            right: 20,
            bottom: -30,
            width: 100,
            height: 100,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.05)",
          }}
        />
      </Paper>

      {/* Setup steps */}
      <Card sx={{ mb: 3 }}>
        <CardContent sx={{ p: 3 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="h6" fontWeight="bold">
              3 bước để thiết lập và bắt đầu
            </Typography>
            <Chip label="1/3 đã hoàn thành" color="primary" size="small" />
          </Stack>
          
          <Typography color="text.secondary" mb={3}>
            Hãy xem những điều cần làm này để bắt đầu công việc kinh doanh của bạn trên TekCommerce.
          </Typography>

          <LinearProgress variant="determinate" value={33} sx={{ mb: 3, height: 6, borderRadius: 3 }} />

          <Box sx={{ p: 2, border: "1px solid #e0e0e0", borderRadius: 2, bgcolor: "#f8f9fa" }}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Box
                sx={{
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  bgcolor: "success.main",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "12px",
                }}
              >
                ✓
              </Box>
              <Box flex={1}>
                <Typography fontWeight="600" color="text.primary">
                  Hãy cho chúng tôi biết về doanh nghiệp của bạn
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Cảm ơn bạn đã đăng ký doanh nghiệp của bạn!
                </Typography>
              </Box>
            </Stack>
          </Box>
        </CardContent>
      </Card>

      {/* Quick stats */}
      <Grid2 container spacing={3} mb={3}>
        <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
          <Card>
            <CardContent>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Box
                  sx={{
                    p: 1.5,
                    borderRadius: 2,
                    bgcolor: "primary.main",
                    color: "white",
                  }}
                >
                  <ShoppingCartOutlined />
                </Box>
                <Box>
                  <Typography variant="h6" fontWeight="bold">
                    0
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Tin đăng hoạt động
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid2>

        <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
          <Card>
            <CardContent>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Box
                  sx={{
                    p: 1.5,
                    borderRadius: 2,
                    bgcolor: "warning.main",
                    color: "white",
                  }}
                >
                  <AssignmentTurnedInOutlined />
                </Box>
                <Box>
                  <Typography variant="h6" fontWeight="bold">
                    0
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Chờ duyệt
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid2>

        <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
          <Card>
            <CardContent>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Box
                  sx={{
                    p: 1.5,
                    borderRadius: 2,
                    bgcolor: "success.main",
                    color: "white",
                  }}
                >
                  <VisibilityOutlined />
                </Box>
                <Box>
                  <Typography variant="h6" fontWeight="bold">
                    0
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lượt xem
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid2>

        <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
          <Card>
            <CardContent>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Box
                  sx={{
                    p: 1.5,
                    borderRadius: 2,
                    bgcolor: "info.main",
                    color: "white",
                  }}
                >
                  <TrendingUpOutlined />
                </Box>
                <Box>
                  <Typography variant="h6" fontWeight="bold">
                    0 ₫
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Doanh thu tháng này
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>

      {/* Next steps */}
      <Grid2 container spacing={3}>
        <Grid2 size={{ xs: 12, md: 8 }}>
          <Card>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" fontWeight="bold" mb={3}>
                Chuẩn bị sẵn sàng cho cửa hàng của bạn
              </Typography>

              <Stack spacing={2}>
                <Paper
                  variant="outlined"
                  sx={{
                    p: 2,
                    border: "1px solid #e0e0e0",
                    borderRadius: 2,
                    bgcolor: "#f8f9fa",
                  }}
                >
                  <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: 1,
                          bgcolor: "#e3f2fd",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        📦
                      </Box>
                      <Box>
                        <Typography fontWeight="600">
                          Thêm sản phẩm đầu tiên của bạn
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Bắt đầu xây dựng kho hàng của bạn bằng cách thêm sản phẩm đầu tiên của bạn hoặc sản phẩm.
                        </Typography>
                      </Box>
                    </Stack>
                    <Chip label="Bắt đầu" color="primary" />
                  </Stack>
                </Paper>

                <Paper
                  variant="outlined"
                  sx={{
                    p: 2,
                    border: "1px solid #e0e0e0",
                    borderRadius: 2,
                    bgcolor: "#f8f9fa",
                  }}
                >
                  <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: 1,
                          bgcolor: "#e8f5e8",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        👥
                      </Box>
                      <Box>
                        <Typography fontWeight="600">
                          Kết nối cửa hàng của bạn với tài khoản TikTok
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Liên kết tài khoản TikTok để tăng khả năng tiếp cận và bán hàng.
                        </Typography>
                      </Box>
                    </Stack>
                    <Chip label="Bắt đầu" color="primary" />
                  </Stack>
                </Paper>
              </Stack>
            </CardContent>
          </Card>
        </Grid2>

        <Grid2 size={{ xs: 12, md: 4 }}>
          <Card>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" fontWeight="bold" mb={2}>
                Hỗ trợ & Tài nguyên
              </Typography>
              <Stack spacing={2}>
                <Box>
                  <Typography variant="body2" fontWeight="600" mb={1}>
                    📖 Hướng dẫn bắt đầu
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Tìm hiểu cách thiết lập cửa hàng
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2" fontWeight="600" mb={1}>
                    💬 Hỗ trợ khách hàng
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Liên hệ với đội ngũ hỗ trợ
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2" fontWeight="600" mb={1}>
                    📊 Phân tích hiệu suất
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Theo dõi doanh số và lượt xem
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default DashboardPage;
