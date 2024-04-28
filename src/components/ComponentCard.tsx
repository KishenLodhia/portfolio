// Importing necessary components from the ui/card module
import { Card, CardHeader, CardContent, CardTitle } from "./ui/card";

// Defining the props for the RepoCard component
interface RepoCardProps {
  title: string;
  data: string;
}

// RepoCard component
const RepoCard = ({ title, data }: RepoCardProps) => (
  // Card component wraps the CardHeader and CardContent components
  <Card>
    <CardHeader>{title}</CardHeader>
    <CardContent>
      <CardTitle>{data}</CardTitle>
    </CardContent>
  </Card>
);

// Exporting the RepoCard component
export default RepoCard;
