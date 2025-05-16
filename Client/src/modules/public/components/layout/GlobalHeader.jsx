import BrandIdentity from "./BrandIdentity";
import ContentNavigation from "./ContentNavigation";
import DoubleDivider from "../../../../shared/components/DoubleDivider";

const GlobalHeader = () => {
  return (
    <>
      <BrandIdentity />
      <ContentNavigation />
      <DoubleDivider />
    </>
  );
};

export default GlobalHeader;
