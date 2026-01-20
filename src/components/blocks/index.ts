import AnimatedCardsWrapper from "./animated-cards/animated-cards-wrapper";
import CasesGridWrapper from "./cases/cases-grid-wrapper";
import CollaboratorsBannerWrapper from "./collaborators-banner/collaborators-banner-wrapper";
import Faq from "./faq";
import LatestNewsWrapper from "./latest-news/latest-news-wrapper";
import MediaAndText from "./media-and-text";
import TestimonialsWrapper from "./testimonials/testimonials-wrapper";
export const blockComponents = {
  BlocksBlocksMediaAndTextLayout: MediaAndText,
  BlocksBlocksAnimatedCardsLayout: AnimatedCardsWrapper,
  BlocksBlocksCardsAndTextLayout: null,
  BlocksBlocksCaseCardGridLayout: CasesGridWrapper,
  BlocksBlocksCollaboratorsBannerLayout: CollaboratorsBannerWrapper,
  BlocksBlocksContactFormLayout: null,
  BlocksBlocksEmployeesLayout: null,
  BlocksBlocksFaqLayout: Faq,
  BlocksBlocksImageBannerLayout: null,
  BlocksBlocksLatestNewsGridLayout: LatestNewsWrapper,
  BlocksBlocksServicesCardsLayout: null,
  BlocksBlocksTestimonialsLayout: TestimonialsWrapper,
  BlocksBlocksTimelineLayout: null,
};
