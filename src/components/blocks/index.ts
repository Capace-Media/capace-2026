import ContactFormWrapper from "../shared/contact-form-wrapper";
import AnimatedCardsWrapper from "./animated-cards/animated-cards-wrapper";
import CardsAndText from "./cards-and-text";
import CasesGridWrapper from "./cases/cases-grid-wrapper";
import CollaboratorsBannerWrapper from "./collaborators-banner/collaborators-banner-wrapper";
import Employees from "./employees";
import Faq from "./faq";
import ImageBanner from "./image-banner";
import LatestNewsWrapper from "./latest-news/latest-news-wrapper";
import MediaAndText from "./media-and-text";
import Quote from "./quote";
import ServiceCards from "./service-cards";
import TestimonialsWrapper from "./testimonials/testimonials-wrapper";
export const blockComponents = {
  BlocksBlocksMediaAndTextLayout: MediaAndText,
  BlocksBlocksAnimatedCardsLayout: AnimatedCardsWrapper,
  BlocksBlocksCardsAndTextLayout: CardsAndText,
  BlocksBlocksCaseCardGridLayout: CasesGridWrapper,
  BlocksBlocksCollaboratorsBannerLayout: CollaboratorsBannerWrapper,
  BlocksBlocksContactFormLayout: ContactFormWrapper,
  BlocksBlocksEmployeesLayout: Employees,
  BlocksBlocksFaqLayout: Faq,
  BlocksBlocksImageBannerLayout: ImageBanner,
  BlocksBlocksLatestNewsGridLayout: LatestNewsWrapper,
  BlocksBlocksTestimonialsLayout: TestimonialsWrapper,
  BlocksBlocksTimelineLayout: null,
  BlocksBlocksQuoteLayout: Quote,
  BlocksBlocksServiceCardsLayout: ServiceCards,
};
