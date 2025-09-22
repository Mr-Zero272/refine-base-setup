"use client";
import { useGenerateList, useMounted } from "@hooks";
import { CheckRounded, CloseRounded } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Chip,
  Container,
  Grid2,
  IconButton,
  Paper,
  Skeleton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import { useTranslate } from "@refinedev/core";
import {
  CreateButton,
  DeleteButton,
  EditButton,
  ShowButton,
} from "@refinedev/mui";

export default function Listings() {
  const t = useTranslate();
  const listings = useGenerateList(10);
  const mounted = useMounted();

  if (!mounted) return null;
  return (
    <Container>
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 12 }}>
          <Grid2 size={{ xs: 12 }}>
            <Paper sx={{ py: 2 }}>
              <Stack
                direction="row"
                gap={2}
                justifyContent="space-between"
                alignItems="center"
                px={2}
                pb={2}
              >
                <Typography variant="h3">
                  {t("review-listings.titles.waitForReview")}
                </Typography>
                <CreateButton />
              </Stack>
              <TableContainer sx={{ maxHeight: 500 }}>
                <Table size="small" stickyHeader>
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        {t("review-listings.columns.title")}
                      </TableCell>
                      <TableCell>
                        {t("review-listings.columns.createdBy")}
                      </TableCell>
                      <TableCell>
                        {t("review-listings.columns.price")}
                      </TableCell>
                      <TableCell>
                        {t("review-listings.columns.status")}
                      </TableCell>
                      <TableCell align="right">
                        {t("review-listings.columns.actions")}
                      </TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {listings.map((listing) => (
                      <TableRow key={listing}>
                        <TableCell>
                          <Stack direction="row" alignItems="center" gap={2}>
                            <Skeleton width={50} height={80} />
                            <Typography fontWeight={600}>
                              Tin đăng {listing}
                            </Typography>
                          </Stack>
                        </TableCell>

                        <TableCell>
                          <Stack direction="row" alignItems="center" gap={2}>
                            <Avatar />
                            <Box>
                              <Typography fontWeight={600}>
                                Nguyễn Văn A
                              </Typography>
                              <Typography variant="caption">
                                nguyenvana@teknikcorp.vn
                              </Typography>
                            </Box>
                          </Stack>
                        </TableCell>

                        <TableCell>
                          <Typography fontWeight={600}>
                            {(6_500_000_000).toLocaleString("vi-VN", {
                              notation: "compact",
                              compactDisplay: "long",
                            })}
                          </Typography>
                        </TableCell>

                        <TableCell>
                          <Chip
                            label="Chờ duyệt"
                            color="warning"
                            size="small"
                          />
                        </TableCell>

                        <TableCell>
                          <Stack
                            direction="row"
                            alignItems="center"
                            gap={1}
                            justifyContent="end"
                          >
                            <ShowButton hideText recordItemId={listing} />
                            <EditButton hideText recordItemId={listing} />
                            <DeleteButton hideText recordItemId={listing} />

                            <Tooltip
                              title={t("review-listings.actions.approve")}
                            >
                              <IconButton color="success">
                                <CheckRounded />
                              </IconButton>
                            </Tooltip>

                            <Tooltip
                              title={t("review-listings.actions.reject")}
                            >
                              <IconButton color="error">
                                <CloseRounded />
                              </IconButton>
                            </Tooltip>
                          </Stack>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid2>
        </Grid2>
      </Grid2>
    </Container>
  );
}
