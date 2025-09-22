"use client";

import { AppLogo } from "@components/icons";
import {
  ApartmentOutlined,
  AssignmentTurnedInOutlined,
  AutoAwesomeMosaicOutlined,
  ExpandLess,
  ExpandMore,
  FlagOutlined,
  FolderOutlined,
  GroupsOutlined,
  PaymentsOutlined,
  PieChartOutlined,
  StackedLineChartOutlined
} from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Box,
  Collapse,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { useGo } from "@refinedev/core";
import React, { useState } from "react";

const DRAWER_WIDTH = 280;

interface CustomLayoutProps {
  children: React.ReactNode;
}

const menuItems = [
  {
    name: "dashboard",
    label: "Trang chủ",
    icon: <StackedLineChartOutlined />,
    route: "/dashboard",
  },
  {
    name: "listings",
    label: "Đơn hàng",
    icon: <ApartmentOutlined />,
    // children: [
    //   { name: "listings", label: "Tin đăng", route: "/listings" },
    //   { name: "listing_categories", label: "Danh mục BĐS", route: "/listing_categories" },
    //   { name: "listing_facilities", label: "Tiện ích", route: "/listing_facilities" },
    //   { name: "listing_attributes", label: "Thuộc tính", route: "/listing_attributes" },
    // ],
  },
  {
    name: "projects",
    label: "Sản phầm",
    icon: <FolderOutlined />,
    // children: [
    //   { name: "projects", label: "Dự án", route: "/projects" },
    //   { name: "project_attributes", label: "Thuộc tính", route: "/project_attributes" },
    //   { name: "project_facilities", label: "Tiện ích", route: "/project_facilities" },
    // ],
  },
  {
    name: "review-listings",
    label: "Marketing",
    icon: <AssignmentTurnedInOutlined />,
    route: "/review-listings",
  },
  {
    name: "directus_users",
    label: "Liên kết",
    icon: <GroupsOutlined />,
    route: "/users",
  },
  {
    name: "listing_plans",
    label: "LIVE và video",
    icon: <PaymentsOutlined />,
    route: "/listing_plans",
  },
  {
    name: "advertising_banners",
    label: "Phát triển",
    icon: <AutoAwesomeMosaicOutlined />,
    route: "/advertising_banners",
  },
  {
    name: "violations",
    label: "La bàn dữ liệu",
    icon: <FlagOutlined />,
    route: "/violations",
  },
  {
    name: "payment_transactions",
    label: "Tình trạng tài khoản",
    icon: <PieChartOutlined />,
    route: "/payment_transactions",
  },
  {
    name: "payment_transactions",
    label: "Tài chính",
    icon: <PieChartOutlined />,
    route: "/payment_transactions",
  },
  {
    name: "payment_transactions",
    label: "Học viện",
    icon: <PieChartOutlined />,
    route: "/payment_transactions",
  },
];

export const CustomLayout: React.FC<CustomLayoutProps> = ({ children }) => {
  const theme = useTheme();
  const go = useGo();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const handleToggleExpanded = (itemName: string) => {
    setExpandedItems((prev) =>
      prev.includes(itemName)
        ? prev.filter((item) => item !== itemName)
        : [...prev, itemName]
    );
  };

  const handleNavigate = (route: string) => {
    go({ to: route });
  };

  const renderMenuItem = (item: any, level = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.includes(item.name);

    return (
      <React.Fragment key={item.name}>
        <ListItem disablePadding>
          <ListItemButton
            onClick={hasChildren ? () => handleToggleExpanded(item.name) : () => handleNavigate(item.route)}
            sx={{
              pl: 2 + level * 2,
              borderRadius: 1,
              mx: 1,
              mb: 0.5,
              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
            }}
          >
            {item.icon && (
              <ListItemIcon sx={{ minWidth: 40, color: "#666" }}>
                {item.icon}
              </ListItemIcon>
            )}
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{
                fontSize: "14px",
                fontWeight: 500,
                color: "#333",
              }}
            />
            {hasChildren && (
              <IconButton size="small" sx={{ p: 0 }}>
                {isExpanded ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            )}
          </ListItemButton>
        </ListItem>
        
        {hasChildren && (
          <Collapse in={isExpanded} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {item.children.map((child: any) => renderMenuItem(child, level + 1))}
            </List>
          </Collapse>
        )}
      </React.Fragment>
    );
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* Header */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "#1d1d41", // TikTok Shop blue color
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <Toolbar>
          <Stack direction="row" alignItems="center" spacing={2} sx={{ flexGrow: 1 }}>
            <AppLogo />
            <Typography variant="h6" noWrap component="div" sx={{ color: "white", fontWeight: 600 }}>
              TekCommerce Dashboard
            </Typography>
          </Stack>
          
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography variant="body2" sx={{ color: "white" }}>
              Trợ giúp
            </Typography>
            <Avatar sx={{ width: 32, height: 32 }} />
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: DRAWER_WIDTH,
            boxSizing: "border-box",
            backgroundColor: "#fafafa",
            borderRight: "1px solid #e0e0e0",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto", py: 1 }}>
          <List>
            {menuItems.map((item) => renderMenuItem(item))}
          </List>
        </Box>
      </Drawer>

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          backgroundColor: "#f8f9fa",
          minHeight: "100vh",
        }}
      >
        <Toolbar />
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};