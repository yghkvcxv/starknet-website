"use client";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Divider,
  Flex,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import { MarkdownBlock } from "src/blocks/MarkdownBlock";
import { useBoolean } from "react-use";
import RoadmapSubscribeForm from "../../../(components)/roadmap/RoadmapSubscribeForm";
import { PageLayout } from "@ui/Layout/PageLayout";
import moment from "moment";
import Link from "next/link";
import { useEffect } from "react";
import { BlocksDynamicData } from "src/app/[locale]/(components)/utils/getBlocksDynamicData";
import { Block } from "src/blocks/Block";
import { Text } from "@ui/Typography/Text";
import {
  RoadmapPost as RoadmapPostType,
  RoadmapVersion,
} from "workspaces/cms-data/src/roadmap";
import RoadmapPostVersion from "../../(components)/RoadmapPostVersion";

interface KeyValuePairs {
  [key: string]: string;
}

const stages: KeyValuePairs = {
  "building-now": "Building now",
  "building-next": "Building next",
  "backlog": "Backlog",
};

export default function RoadmapPost({
  roadmapPost,
  locale,
  blocksDynamicData,
  roadmapVersion,
  psCopy
}: {
  roadmapPost: RoadmapPostType;
  roadmapVersion: RoadmapVersion;
  locale: string;
  blocksDynamicData: BlocksDynamicData;
  psCopy?: string;
}) {
  const [isOpen, setIsOpen] = useBoolean(false);
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.tagName === 'A' && (target as HTMLAnchorElement).getAttribute('href') === '#sendgrid') {
        event.preventDefault();
        setIsOpen(true)
      }
    };
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [setIsOpen]);

  return (
    <PageLayout
      breadcrumbs={
        <Breadcrumb separator="/">
          <BreadcrumbItem>
            <BreadcrumbLink
              as={Link}
              href={`/${locale}`}
              fontSize="sm"
              noOfLines={1}
            >
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink
              as={Link}
              href={`/${locale}/developers`}
              fontSize="sm"
              noOfLines={1}
            >
              Developers
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink
              as={Link}
              href={`/${locale}/roadmap`}
              fontSize="sm"
              noOfLines={1}
            >
              Roadmap
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink
              as={Link}
              href={`/${locale}/roadmap/${roadmapPost?.slug}`}
              fontSize="sm"
              noOfLines={1}
            >
              {roadmapPost?.title}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      }
      pageLastUpdated={`Page last updated ${moment(
        roadmapPost?.gitlog?.date
      ).fromNow()}`}
      main={
        <Container maxWidth="846px">
          <Box mb={"2rem"}>
            <RoadmapPostVersion roadmapVersion={roadmapVersion} />
          </Box>
          <Heading variant="h2" color="heading-navy-fg">
            {roadmapPost.title}
          </Heading>
          <Text variant="cardBody" mt="6"><strong>STAGE:</strong> {stages[roadmapPost?.stage]}</Text>
          <Heading variant="h4" mt="24px" mb="32px" fontSize="sm">
            {roadmapPost.availability}
          </Heading>
          {roadmapPost?.state ? <Flex alignItems="center"mb="40px"><Text display="flex" alignItems="center" variant="cardBody" color="roadmap-availability-state-fg" height="32px" borderRadius="5px" padding="4px 12px" borderWidth="1px" borderStyle="solid" borderColor="roadmap-card-border-color" bg="roadmap-card-tag-bg">{roadmapPost?.state}<Box display="inline-block" bg={roadmapPost?.state === "on testnet" ? "#00815C" : "#EF5600"} borderRadius="50%" width="14px" height="14px" ml="2"></Box></Text>{roadmapPost?.specific_info ? <Text variant="cardBody" ml="2">{roadmapPost?.specific_info}</Text> : null}</Flex> : null}
          <Divider mt="8px" mb="32px" />
          <Flex direction="column" gap="32px">
            {roadmapPost.blocks?.map((block, i) => (
              <Block
                key={i}
                block={block}
                locale={locale}
                blocksDynamicData={blocksDynamicData}
              />
            ))}
          </Flex>
          <Spacer height="32px" />
          <Divider mb="6" />
          <MarkdownBlock body={psCopy as string} />
          <RoadmapSubscribeForm isOpen={isOpen} setIsOpen={setIsOpen} />
          <Divider mt="6" />
        </Container>
      }
    />
  );
}