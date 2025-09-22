"use client";

import "@fontsource-variable/montserrat";
import { createTheme, ThemeProvider } from "@mui/material";
import { viVN } from "@mui/x-data-grid/locales/viVN";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";

const theme = createTheme(
  {
    shape: {
      borderRadius: 10,
    },
    components: {
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
      },
      MuiDialog: {
        defaultProps: {
          fullWidth: true,
        },
        styleOverrides: {
          paper: {
            borderRadius: 10,
          },
        },
      },
      MuiDialogActions: {
        styleOverrides: {
          root: {
            justifyContent: "end !important",
          },
        },
      },
      MuiCard: {
        defaultProps: {
          variant: "outlined",
        },
      },
      MuiAppBar: {
        defaultProps: {
          elevation: 0,
        },
      },
      MuiBackdrop: {
        styleOverrides: {
          root: {
            backdropFilter: "blur(6px)",
          },
        },
      },
      MuiTableHead: {
        styleOverrides: {
          root: {
            "& th": {
              textTransform: "uppercase",
              backgroundColor: "#f8f8f8",
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          colorSuccess: ({ theme }) => ({
            backgroundColor: `${theme.palette.success.main}30`,
            color: theme.palette.success.dark,
          }),
          colorWarning: ({ theme }) => ({
            backgroundColor: `${theme.palette.warning.main}30`,
            color: theme.palette.warning.dark,
          }),
          root: {
            fontWeight: 600,
          },
          sizeSmall: {
            padding: "0.25rem 0.3rem",
            fontSize: "0.7rem",
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: ({ ownerState }) => ({
            boxShadow: `0 0 ${(ownerState.elevation || 0) * 5}px 0 #0002`,
          }),
        },
      },
      MuiContainer: {
        defaultProps: {
          maxWidth: "xl",
        },
      },
      MuiDialogTitle: {
        styleOverrides: {
          root: {
            fontSize: 16,
          },
        },
      },
      MuiSwitch: {
        styleOverrides: {
          root: ({ theme }) => ({
            width: 42,
            height: 26,
            padding: 0,
            "& .MuiSwitch-switchBase": {
              padding: 0,
              margin: 2,
              transitionDuration: "300ms",
              "&.Mui-checked": {
                transform: "translateX(16px)",
                color: "#fff",
                "& + .MuiSwitch-track": {
                  backgroundColor: "#65C466",
                  opacity: 1,
                  border: 0,
                  ...theme.applyStyles("dark", {
                    backgroundColor: "#2ECA45",
                  }),
                },
                "&.Mui-disabled + .MuiSwitch-track": {
                  opacity: 0.5,
                },
              },
              "&.Mui-focusVisible .MuiSwitch-thumb": {
                color: "#33cf4d",
                border: "6px solid #fff",
              },
              "&.Mui-disabled .MuiSwitch-thumb": {
                color: theme.palette.grey[100],
                ...theme.applyStyles("dark", {
                  color: theme.palette.grey[600],
                }),
              },
              "&.Mui-disabled + .MuiSwitch-track": {
                opacity: 0.7,
                ...theme.applyStyles("dark", {
                  opacity: 0.3,
                }),
              },
            },
            "& .MuiSwitch-thumb": {
              boxSizing: "border-box",
              width: 22,
              height: 22,
            },
            "& .MuiSwitch-track": {
              borderRadius: 26 / 2,
              backgroundColor: "#E9E9EA",
              opacity: 1,
              transition: theme.transitions.create(["background-color"], {
                duration: 500,
              }),
              ...theme.applyStyles("dark", {
                backgroundColor: "#39393D",
              }),
            },
          }),
        },
      },
    },
    palette: {
      primary: {
        main: "#000088",
      },
      success: {
        main: "#50C878",
      },
      secondary: {
        main: "#00C16E",
      },
      warning: {
        main: "#FFD700",
      },
    },
    typography: {
      button: {
        textTransform: "capitalize",
      },
      fontFamily: "'Montserrat Variable', sans-serif",
      h1: {
        fontSize: "1.75rem",
        fontWeight: 700,
      },
      h2: {
        fontSize: "1.4rem",
        fontWeight: 600,
      },
      h3: {
        fontSize: "1.25rem",
        fontWeight: 600,
      },
      h4: {
        fontSize: "1rem",
      },
      h5: {
        fontSize: "0.75rem",
      },
      h6: {
        fontSize: "0.7rem",
      },
      subtitle1: {
        fontSize: "0.6rem",
      },
      subtitle2: {
        fontSize: "0.5rem",
      },
      body1: {
        fontSize: "0.8rem",
      },
      body2: {
        fontSize: "0.75rem",
      },
      caption: {
        fontSize: "0.75rem",
        color: "GrayText",
        fontWeight: 600,
      },
      overline: {
        fontSize: "0.625rem",
      },
    },
  },
  viVN
);

export default function MuiProvider({ children }: React.PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {children}
      </LocalizationProvider>
    </ThemeProvider>
  );
}
