import { DashboardCard } from "@/components/Dashboard/Card";
import { PostsTable } from "@/components/Posts/PostsTable";
import { Folders, MessageCircle, Newspaper, User } from "lucide-react";

export default function Home() {
  const iconStyling = "text-slate-500 dark:text-slate-200";

  return (
    <>
      <div className="flex flex-col justify-between gap-5 mb-5 md:flex-row">
        <DashboardCard
          title="Posts"
          count={100}
          icon={<Newspaper size={72} className={iconStyling} />}
        />
        <DashboardCard
          title="Categories"
          count={12}
          icon={<Folders size={72} className={iconStyling} />}
        />
        <DashboardCard
          title="User"
          count={100}
          icon={<User size={72} className={iconStyling} />}
        />
        <DashboardCard
          title="Comments"
          count={2100}
          icon={<MessageCircle size={72} className={iconStyling} />}
        />
      </div>
      <PostsTable />
    </>
  );
}
