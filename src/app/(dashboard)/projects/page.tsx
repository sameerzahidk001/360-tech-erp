"use client";

import { useState } from "react";
import { EntityPage, StatusBadge } from "@/components/modules/entity-page";
import { tasks, projects } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";
import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Task, Project } from "@/types";

export default function ProjectsPage() {
  const [tab, setTab] = useState<"tasks" | "projects">("tasks");

  return (
    <div>
      <PageHeader title="Projects & Tasks" description="Manage projects, assign tasks and track progress" />
      <div className="flex gap-2 mb-6">
        <button onClick={() => setTab("tasks")} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${tab === "tasks" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"}`}>
          Tasks
        </button>
        <button onClick={() => setTab("projects")} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${tab === "projects" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"}`}>
          Projects
        </button>
      </div>

      {tab === "tasks" ? (
        <EntityPage<Task>
          title="Task"
          description=""
          data={tasks}
          searchKeys={["title", "assignee", "project"]}
          statusKey="status"
          addLabel="Create Task"
          columns={[
            { key: "title", header: "Task", render: (t) => <span className="font-medium">{t.title}</span> },
            { key: "project", header: "Project" },
            { key: "assignee", header: "Assignee" },
            { key: "priority", header: "Priority", render: (t) => <StatusBadge status={t.priority} /> },
            { key: "dueDate", header: "Due Date", render: (t) => formatDate(t.dueDate) },
            { key: "progress", header: "Progress", render: (t) => (
              <div className="flex items-center gap-2">
                <div className="h-2 w-16 rounded-full bg-muted overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: `${t.progress}%` }} />
                </div>
                <span className="text-xs">{t.progress}%</span>
              </div>
            )},
            { key: "status", header: "Status", render: (t) => <StatusBadge status={t.status} /> },
          ]}
          formFields={[
            { name: "title", label: "Task Title", required: true },
            { name: "project", label: "Project" },
            { name: "assignee", label: "Assignee" },
            { name: "priority", label: "Priority", type: "select", options: [
              { value: "low", label: "Low" }, { value: "medium", label: "Medium" },
              { value: "high", label: "High" }, { value: "urgent", label: "Urgent" },
            ]},
            { name: "dueDate", label: "Due Date", type: "date" },
          ]}
        />
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Card key={p.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">{p.name}</CardTitle>
                  <StatusBadge status={p.status} />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">Manager: {p.manager}</p>
                <div className="mb-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progress</span><span className="font-medium">{p.progress}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${p.progress}%` }} />
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">Due: {formatDate(p.dueDate)}</p>
                <div className="flex flex-wrap gap-1 mt-3">
                  {p.team.map((member) => (
                    <Badge key={member} className="text-xs">{member}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
