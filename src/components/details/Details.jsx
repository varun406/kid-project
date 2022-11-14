import React from "react";
import { Container } from "../CommonStyles";
import {
  DetailSection,
  DetailsInfo,
  DetailsSection,
  DetailsTitle,
  LeftSection,
  ParaOne,
  ParaTwo,
  Picture,
  RightSection,
  Wrapper,
} from "./Details.styles";

const content =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-lessnormal distribution of letters, as opposed to using Content here, content here making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text and a search for lorem ipsum will uncover many web sites still in their infancy. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare quam viverra orci sagittis eu volutpat odio. Pharetra diam sit amet nisl. Semper feugiat nibh sed pulvinar. Eget dolor morbi non arcu risus. Nullam vehicula ipsum a arcu cursus vitae. Et magnis dis parturient montes nascetur.  ";

const detailData = {
  title: "What We Excel In",
  content,
};

const Details = () => {
  return (
    <Container bgColor=" #f7f7f7">
      <Wrapper>
        <DetailsTitle>{detailData.title}</DetailsTitle>
        <DetailSection>
          <LeftSection>
            <Picture src="./assets/detail.jpg" alt="detail-image" />
          </LeftSection>
          <RightSection>
            <DetailsSection>
              <DetailsInfo>
                <ParaOne>{detailData.content}</ParaOne>
              </DetailsInfo>
            </DetailsSection>
          </RightSection>
        </DetailSection>
      </Wrapper>
    </Container>
  );
};

export default Details;
