import React from "react";
import { Typography, Divider, capitalize  } from "@mui/material";
import { ContainerPage,BoxItem } from "./styles";
import StarBorderIcon from "@mui/icons-material/StarBorder";

function RepositoryInfo({ repositories }) {
  const compareByStars = (a, b) => b.stargazers_count - a.stargazers_count;

  const sortedRepositories = repositories.sort(compareByStars);

  const handleRepoClick = (repo) => {
    console.log(`Clicado em ${repo.name}`);
  };

  return (
    <>
      {sortedRepositories && sortedRepositories.length > 0 ? (
        sortedRepositories.map((repo) => (
          <ContainerPage key={repo.id} >
            <BoxItem >
              <Typography
                variant="h6"
                style={{ cursor: "pointer", fontWeight: "bold" , color: "black"}}
                onClick={() => handleRepoClick(repo)}
              >
                {capitalize(repo.name)}
              </Typography>
              <Typography variant="body2">{repo.description}</Typography>
              <Typography variant="body2">
                <StarBorderIcon
                  sx={{
                    verticalAlign: "middle",
                    marginRight: 1,
                    fontSize: "medium",
                  }}
                />
                {repo.stargazers_count} | Atualizado há{" "}
                {getDaysSinceLastUpdate(repo.updated_at)} dias
              </Typography>
            </BoxItem>
            <Divider />
          </ContainerPage>
        ))
      ) : (
        <Typography variant="body2">Nenhum repositório encontrado.</Typography>
      )}
    </>
  );
}

function getDaysSinceLastUpdate(updatedAt) {
  const lastUpdateDate = new Date(updatedAt);
  const currentDate = new Date();
  const timeDifference = currentDate - lastUpdateDate;
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  return daysDifference;
}

export default RepositoryInfo;
