import React, { useState } from "react";
import Container from "@mui/material/Container";
import PageHeader from "./../components/PageHeader";
import Grid from "@mui/material/Grid";
import { Divider, Pagination, Typography } from "@mui/material";
import usePagination from "./helpers/usePagination";
import { default as aboutArticles } from "./helpers/aboutArticles.json";

const AboutPage = () => {
  let [page, setPage] = useState(1);
  const PER_PAGE = 1;

  const count = Math.ceil(aboutArticles.length / PER_PAGE);
  const data = usePagination(aboutArticles, PER_PAGE);

  const handleChange = (
    event: React.ChangeEvent<unknown> | null,
    page: number
  ) => {
    setPage(page);
    data.jump(page);
  };

  return (
    <Container sx={{ pt: 2 }}>
      <PageHeader
        title="About Page"
        subtitle="Here you can find detailed explanation about how to use the application"
      />

      <Grid container spacing={2} padding={2} minHeight="70vh">
        {data.currentData().map((article) => {
          return (
            <>
              <Grid item xs={12} md={6} fontSize={20}>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  component="p"
                  whiteSpace="pre-line"
                >
                  {article.article}
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                display={"flex"}
                justifyContent={"center"}
              >
                <img
                  src={article.image.url}
                  alt={article.image.alt}
                  width={article.width}
                />
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
            </>
          );
        })}
        <Grid item xs={12} display="flex" justifyContent="center">
          <Pagination
            count={count}
            size="large"
            page={page}
            variant="outlined"
            shape="rounded"
            onChange={handleChange}
            color="primary"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutPage;
