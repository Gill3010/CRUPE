import ResponsiveGrid from './ResponsiveGrid';
import PatentCard from './PatentCard';
import PatentabilityCard from './PatentabilityCard';
import CopyrightRegistrationCard from './CopyrightRegistrationCard';
import TrademarkRegistrationCard from './TrademarkRegistrationCard';
import GeographicalIndicationCard from './GeographicalIndicationCard';
import PlantVarietyCertificateCard from './PlantVarietyCertificateCard';
import TechPackageDevelopmentCard from './TechPackageDevelopmentCard';
import InnovationContestParticipationCard from './InnovationContestParticipationCard';
import IntellectualPropertyTrainingCard from './IntellectualPropertyTrainingCard';
const CardsGrid = () => {
  return (
    <ResponsiveGrid>
      <PatentCard />
      <PatentabilityCard />
      <CopyrightRegistrationCard />
      <TrademarkRegistrationCard />
      <GeographicalIndicationCard />
      <PlantVarietyCertificateCard />
      <TechPackageDevelopmentCard />
      <InnovationContestParticipationCard />
      <IntellectualPropertyTrainingCard />
      {/* Agrega más componentes aquí */}
    </ResponsiveGrid>
  );
};

export default CardsGrid;