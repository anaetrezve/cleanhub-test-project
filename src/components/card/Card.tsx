import { Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CATEGORY, Hub } from "../../types/hubs";
import { getInitials } from "../../utils";

const HUB_DETAILS_URL = "https://test.cleanhub.com/hub/";

type HubCardProps = {
  hub: Hub;
};

export default function HubCard({ hub }: HubCardProps) {
  const openDetailsPage = () => {
    window.location.href = HUB_DETAILS_URL + hub?.slug;
  };

  return (
    <Card>
      <CardHeader
        avatar={
          hub?.logo?.thumbnailDirectLink ? (
            <Avatar src={hub?.logo?.thumbnailDirectLink} />
          ) : (
            <Avatar>{getInitials(hub?.displayName)}</Avatar>
          )
        }
        title={hub?.displayName}
        subheader={hub?.location}
      />
      <CardMedia
        component="img"
        height="194"
        image={hub?.cardImage?.thumbnailDirectLink}
        alt={hub?.displayName}
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {hub?.cardDescription}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          <strong>Total recovered plastic: </strong> {hub?.formattedTotalRecoveredQuantity}
          {hub?.recoveredQuantityUnit?.toString()?.toLowerCase()}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          <strong>Total unassigned: </strong> {hub?.unassignedQuantityTotal?.toFixed(2)}
          {hub?.recoveredQuantityUnit?.toString()?.toLowerCase()}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          <strong>Part of portfolio: </strong> {hub?.category === CATEGORY.PORTFOLIO ? "Yes" : "No"}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <Button size="small" onClick={openDetailsPage}>
          Read Their Story
        </Button>
      </CardActions>
    </Card>
  );
}
