/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";

// Images
import LogoAsana from "assets/images/small-logos/logo-asana.svg";
import logoGithub from "assets/images/small-logos/logo-shein.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoBag from "assets/images/small-logos/logo-bag.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";

export default function data() {
  const Project = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" variant="rounded" />
      <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  const Progress = ({ color, value }) => (
    <MDBox display="flex" alignItems="center">
      <MDTypography variant="caption" color="text" fontWeight="medium">
        {value}%
      </MDTypography>
      <MDBox ml={0.5} width="9rem">
        <MDProgress variant="gradient" color={color} value={value} />
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      { Header: "tienda", accessor: "project", width: "30%", align: "left" },
      { Header: "precio", accessor: "budget", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "stock", accessor: "completion", align: "center" },
      { Header: "remain", accessor: "remain", align: "center" },
    ],

    rows: [
      {
        project: <Project image={logoBag} name="#345234" />,
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            Gs 120,280
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            en stock
          </MDTypography>
        ),
        completion: <Progress color="success" value={87} />,
        remain: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            56
          </MDTypography>
        ),
      },
      {
        project: <Project image={logoBag} name="#245264" />,
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            Gs 180,500
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            en stock
          </MDTypography>
        ),
        completion: <Progress color="warning" value={47} />,
        remain: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            14
          </MDTypography>
        ),
      },
      {
        project: <Project image={logoBag} name="#152567" />,
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            Gs 80,250
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            en stock
          </MDTypography>
        ),
        completion: <Progress color="success" value={67} />,
        remain: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            43
          </MDTypography>
        ),
      },
      {
        project: <Project image={logoBag} name="#194834" />,
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            Gs 220,280
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            ultimas unidades
          </MDTypography>
        ),
        completion: <Progress color="error" value={7} />,
        remain: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            4
          </MDTypography>
        ),
      },
    ],
  };
}
