import Link from "next/link";
import { Project } from "../utils/projectUtils";

interface Props {
  articleList: Project[];
  currentArticleId?: string;
}

const ProjectsNav = ({ articleList, currentArticleId }: Props) => {
  return (
    <aside className="col-3">
      <h3>Projects</h3>
      <nav>
        <ul>
          {articleList.map(article => {
            return (
              <li
                key={article.id}
                className={article.id === currentArticleId ? "font-weight-bold" : ""}
              >
                <Link href={`/projects/${article.id}`}>{article.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default ProjectsNav;
