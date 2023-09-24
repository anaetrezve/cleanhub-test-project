import { Box, Container, Grid, Link, SelectChangeEvent, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { ChangeEvent, FC, useMemo, useState } from "react";
import HubCard from "../../components/card/Card";
import CategoryFilter from "../../components/fitlers/CategoryFilter";
import { getHubLists } from "../../services/hubs";
import { Hub, STATE } from "../../types/hubs";
import TextFilter from "../../components/fitlers/TextFilter";
import StateFilter from "../../components/fitlers/StateFilter";

const Hubs: FC = () => {
  const [category, setCategory] = useState("");
  const [active, setActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const { isLoading, error, data } = useQuery<Hub[], Error>({
    queryKey: ["hubs"],
    queryFn: getHubLists,
  });

  const filteredHubs = useMemo(() => {
    let hubs = data || [];
    if (category) {
      hubs = hubs?.filter((hub) => {
        if (hub?.category === category?.toUpperCase()) {
          return true;
        }
        return false;
      });
    }

    if (active) {
      hubs = hubs.filter((hub) => {
        if (hub.state === STATE.ACTIVE) {
          return true;
        }
        return false;
      });
    }

    if (searchTerm) {
      hubs = hubs.filter((hub) => {
        if (hub.displayName?.toLowerCase()?.includes(searchTerm?.toLowerCase())) {
          return true;
        }
        return false;
      });
    }

    return hubs;
  }, [data, category, active, searchTerm]);

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  const handleStateChange = () => {
    setActive((prev) => !prev);
  };

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Container sx={{ mt: 20 }}>
      {!isLoading && !error && (
        <Grid container columnSpacing={3} rowSpacing={1} sx={{ mb: 5 }}>
          <Grid item xs={12} sm={4}>
            <CategoryFilter data={data} value={category} onChange={handleChange} />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextFilter value={searchTerm} onSearch={handleSearch} />
          </Grid>

          <Grid item xs={12} sm={4}>
            <StateFilter onChange={handleStateChange} checked={active} />
          </Grid>
        </Grid>
      )}

      <Grid container spacing={2}>
        {isLoading && (
          <Grid item>
            <Box>
              <Typography>Loading...</Typography>
            </Box>
          </Grid>
        )}

        {error && (
          <Grid item>
            <Box>
              <Typography>
                Something went wrong. Click <Link href="/">here</Link> to reload
              </Typography>
            </Box>
          </Grid>
        )}

        {filteredHubs?.map((hub) => {
          return (
            <Grid item key={hub.uuid} xs={12} sm={6} md={4}>
              <HubCard hub={hub} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Hubs;
