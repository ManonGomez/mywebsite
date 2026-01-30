import { getPosts } from "@/utils/utils";
import { Column, Grid } from "@once-ui-system/core";
import { ProjectCard } from "@/components";
import { formatDate } from "@/utils/formatDate";

interface ProjectsProps {
  range?: [number, number?];
  exclude?: string[];
}

export function Projects({ range, exclude }: ProjectsProps) {
  let allProjects = getPosts(["src", "app", "work", "projects"]);

  // Exclude by slug (exact match)
  if (exclude && exclude.length > 0) {
    allProjects = allProjects.filter((post) => !exclude.includes(post.slug));
  }

  const sortedProjects = allProjects.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <Column fillWidth gap="24" marginBottom="40" paddingX="l">
      <Grid fillWidth gap="16" columns={2} m={{ columns: 2 }} s={{ columns: 1 }}>
        {displayedProjects.map((post, index) => (
          <ProjectCard
            priority={index < 2}
            key={post.slug}
            href={`/work/${post.slug}`}
            images={post.metadata.images}
            title={post.metadata.title}
            description={post.metadata.summary}
            avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
            link={post.metadata.link || ""}
            publishedAt={post.metadata.publishedAt ? formatDate(post.metadata.publishedAt) : undefined}
          />
        ))}
      </Grid>
    </Column>
  );
}
