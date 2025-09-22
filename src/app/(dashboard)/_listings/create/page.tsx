"use client";

import { CrownIcon } from "@components/icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { SaveRounded, SendRounded } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  Container,
  FormControl,
  FormHelperText,
  Grid2,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  Switch,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useTranslate } from "@refinedev/core";
import { useForm } from "@refinedev/react-hook-form";
// import { NumericFormat } from "react-number-format";
import { z } from "zod";

const listingFormSchema = z.object({
  // Basic information
  title: z.string().min(1),
  listingType: z.string(),
  price: z.number().min(1_000),
  acreage: z.number(),
  description: z.string().min(30),

  //   Images
  images: z.array(z.string()).min(1),

  //   Location
  address: z.string().min(1),
  long: z.number(),
  lat: z.number(),
});

export default function ListingCreate() {
  const {
    saveButtonProps,
    refineCore: { formLoading, onFinish },
    handleSubmit,
    register,
    control,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(listingFormSchema),
  });
  const t = useTranslate();
  const theme = useTheme();

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onFinish)}
    >
      <Box
        bgcolor="white"
        m={-3}
        mb={2}
        py={2}
        position="sticky"
        top={50}
        zIndex={10}
      >
        <Container>
          <Stack direction="row" justifyContent="end">
            <Stack direction="row" gap={2}>
              <Button
                color="secondary"
                variant="outlined"
                startIcon={<SaveRounded />}
              >
                {t("buttons.saveDraft")}
              </Button>
              <Button
                variant="contained"
                startIcon={<SendRounded />}
                type="submit"
              >
                {t("listings.buttons.publish")}
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Container>
        <Grid2 container spacing={2}>
          <Grid2 size={{ xs: 12, md: 8 }}>
            <Stack gap={2}>
              <Paper sx={{ px: 2, py: 4 }} component={Stack} gap={2}>
                <Typography variant="h3">
                  {t("listings.titles.basicInfo")}
                </Typography>

                <TextField
                  fullWidth
                  margin="normal"
                  label={t("listings.fields.title")}
                  placeholder={t("listings.placeholders.title")}
                  error={!!errors.title}
                  helperText={errors.title?.message}
                  {...register("title")}
                />

                <Grid2 container spacing={2}>
                  <Grid2 size={{ xs: 12, md: 6 }}>
                    <FormControl fullWidth error={!!errors.listingType}>
                      <Select
                        label={t("listings.fields.type")}
                        {...register("listingType")}
                      >
                        <MenuItem value="sell">
                          {t("listings.options.sell")}
                        </MenuItem>
                        <MenuItem value="rent">
                          {t("listings.options.rent")}
                        </MenuItem>
                      </Select>

                      <InputLabel>{t("listings.fields.type")}</InputLabel>
                      <FormHelperText error={!!errors.listingType}>
                        {errors.listingType?.message}
                      </FormHelperText>
                    </FormControl>
                  </Grid2>
                  <Grid2 size={{ xs: 12, md: 6 }}>
                    {/* <NumericFormat
                      customInput={TextField}
                      fullWidth
                      label={t("listings.fields.price")}
                      placeholder={t("listings.placeholders.price")}
                      thousandSeparator
                      error={!!errors.price}
                      helperText={errors.price?.message}
                      {...register("price")}
                      onValueChange={({ floatValue }) => {
                        floatValue && setValue("price", floatValue as number);
                      }}
                    /> */}
                  </Grid2>
                </Grid2>
{/* 
                <NumericFormat
                  customInput={TextField}
                  fullWidth
                  label={t("listings.fields.acreage")}
                  placeholder={t("listings.placeholders.acreage")}
                  thousandSeparator
                  error={!!errors.acreage}
                  helperText={errors.acreage?.message}
                  {...register("acreage")}
                /> */}

                <TextField
                  fullWidth
                  label={t("listings.fields.description")}
                  placeholder={t("listings.placeholders.description")}
                  error={!!errors.description}
                  helperText={errors.description?.message}
                  multiline
                  rows={4}
                  {...register("description")}
                />
              </Paper>

              <Paper sx={{ px: 2, py: 4 }} component={Stack} gap={2}>
                <Typography variant="h3">
                  {t("listings.titles.images")}
                </Typography>

                <Box
                  height={300}
                  border="1px dashed #ddd"
                  borderRadius={1}
                ></Box>
              </Paper>

              <Paper sx={{ px: 2, py: 4 }} component={Stack} gap={2}>
                <Typography variant="h3">
                  {t("listings.titles.location")}
                </Typography>

                {/* <HereSearch /> */}
              </Paper>
            </Stack>
          </Grid2>
          <Grid2
            size={{ xs: 12, md: 4 }}
            height="fit-content"
            position="sticky"
            top={130}
          >
            <Stack gap={2}>
              <Paper sx={{ p: 2 }} component={Stack} gap={2}>
                <Typography variant="h3">
                  {t("listings.titles.vipOption")}
                </Typography>

                <Stack
                  direction="row"
                  p={2}
                  border={`1px solid ${theme.palette.warning.main}`}
                  bgcolor={`${theme.palette.warning.main}10`}
                  borderRadius={1}
                  alignItems="center"
                  gap={2}
                >
                  <CrownIcon color="warning" />
                  <Stack flex={1}>
                    <Typography fontWeight={600}>
                      {t("listings.vipOption.title")}
                    </Typography>
                    <Typography>
                      {t("listings.vipOption.description")}
                    </Typography>
                  </Stack>
                  <Switch />
                </Stack>
              </Paper>

              <Paper sx={{ p: 2 }} component={Stack} gap={2}>
                <Typography variant="h3">
                  {t("listings.titles.listingPlans")}
                </Typography>

                <Card component={Stack} sx={{ p: 2 }} direction="row" gap={2}>
                  <Box flex={1}>
                    <Typography fontWeight={600}>
                      {t("listings.listingPlans.basic")}
                    </Typography>
                    <Typography fontSize={12}>
                      {t("listings.listingPlans.showDays", {
                        days: 7,
                      })}
                    </Typography>
                  </Box>
                  <Typography color="info" fontWeight={600}>
                    {t("listings.listingPlans.free")}
                  </Typography>
                </Card>

                <Card component={Stack} sx={{ p: 2 }} direction="row" gap={2}>
                  <Box flex={1}>
                    <Typography fontWeight={600}>
                      {t("listings.listingPlans.highlight")}
                    </Typography>
                    <Typography fontSize={12}>
                      {t("listings.listingPlans.showDays", {
                        days: 30,
                      })}
                    </Typography>
                  </Box>
                  <Typography color="info" fontWeight={600}>
                    {(500_000).toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </Typography>
                </Card>

                <Card component={Stack} sx={{ p: 2 }} direction="row" gap={2}>
                  <Box flex={1}>
                    <Typography fontWeight={600}>
                      {t("listings.listingPlans.premium")}
                    </Typography>
                    <Typography fontSize={12}>
                      {t("listings.listingPlans.showDays", {
                        days: 60,
                      })}
                    </Typography>
                  </Box>
                  <Typography color="info" fontWeight={600}>
                    {(1_000_000).toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </Typography>
                </Card>
              </Paper>
            </Stack>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}
