import { CheckBoxOutlined } from "@mui/icons-material";
import React from "react";
import {
  Banner,
  BannerSection,
  BriefSection,
  GlobalStyles,
  ImageColumn,
  InfoColumn,
  SectionDesc,
  SectionHeading,
  SectionImage,
} from "../../components/CommonStyles";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import {
  Benefit,
  BenefitDesc,
  BenefitLogo,
  BenefitSection,
  Box,
  CardWrap,
  Designation,
  Heading,
  Name,
  RegisterButton,
  RegisterNowSection,
  TeamCard,
  TeamDesc,
  TeamDetails,
  TeamHeading,
  TeamImg,
  TeamSection,
  Wrapper,
  OverViewSection,
} from "./AboutUs.styles";
import { team } from "./teamData";

const AboutUs = () => {
  return (
    <Box>
      <GlobalStyles />

      <Header />
      <Wrapper>
        <BannerSection>
          <Banner src="./assets/about-banner.jpg" />
        </BannerSection>
        <OverViewSection>
          <SectionHeading>Overview</SectionHeading>
          <SectionDesc>
            Donec mi velit, vehicula at efficitur ut, porta in neque. Morbi a
            ligula lacus. Etiam metus ipsum, faucibus ut mollis non, porta quis
            lorem. Etiam non enim ornare, feugiat sapien ac, malesuada eros. Sed
            id tempor nisl, a tempus mauris. Sed odio nibh, ultrices in finibus
            sed, dignissim ut ipsum. Curabitur augue risus, iaculis at
            condimentum a, imperdiet id orci. Suspendisse sed hendrerit lacus.
            Praesent felis eros, accumsan sed dictum vel, sollicitudin et nisl.
          </SectionDesc>
        </OverViewSection>
        <BriefSection>
          <InfoColumn>
            <SectionHeading>Our Mission</SectionHeading>
            <SectionDesc>
              Vestibulum tempor vitae dui ut luctus. Aliquam quis dapibus enim.
              Pellentesque rhoncus facilisis rutrum. Fusce vitae sollicitudin
              diam. Fusce rhoncus in justo at auctor. Nullam ipsum tortor,
              dapibus ac sodales et, euismod vel urna. Proin pellentesque
              elementum sem a molestie.{" "}
            </SectionDesc>
          </InfoColumn>
          <ImageColumn>
            <SectionImage src="./assets/mission.jpg" />
          </ImageColumn>
        </BriefSection>
        <BriefSection>
          <ImageColumn>
            <SectionImage src="./assets/vision.jpg" />
          </ImageColumn>
          <InfoColumn>
            <SectionHeading>Our Vision</SectionHeading>
            <SectionDesc>
              Vestibulum tempor vitae dui ut luctus. Aliquam quis dapibus enim.
              Pellentesque rhoncus facilisis rutrum. Fusce vitae sollicitudin
              diam. Fusce rhoncus in justo at auctor. Nullam ipsum tortor,
              dapibus ac sodales et, euismod vel urna. Proin pellentesque
              elementum sem a molestie.{" "}
            </SectionDesc>
          </InfoColumn>
        </BriefSection>
        <TeamSection>
          <TeamHeading>Our Leading, Strong And Creative Team</TeamHeading>
          <TeamDetails>
            {team.map((member, index) => {
              return (
                <TeamCard key={index}>
                  <CardWrap>
                    <TeamImg src={member.img} />
                    <TeamDesc>
                      <Name>{member.name}</Name>
                      <Designation>{member.designation}</Designation>
                    </TeamDesc>
                  </CardWrap>
                </TeamCard>
              );
            })}
          </TeamDetails>
        </TeamSection>
        <RegisterNowSection>
          <Heading>Register for Free!</Heading>
          <BenefitSection>
            <Benefit>
              <BenefitLogo>
                <CheckBoxOutlined />
              </BenefitLogo>
              <BenefitDesc>No credit card required</BenefitDesc>
            </Benefit>
            <Benefit>
              <BenefitLogo>
                <CheckBoxOutlined />
              </BenefitLogo>
              <BenefitDesc>Cancel anytime</BenefitDesc>
            </Benefit>
          </BenefitSection>
          <RegisterButton>Register Now</RegisterButton>
        </RegisterNowSection>
      </Wrapper>
      <Footer />
    </Box>
  );
};

export default AboutUs;
