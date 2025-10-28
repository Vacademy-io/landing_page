"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ReactFlow, { Background, Node, Edge, MarkerType, BackgroundVariant, ReactFlowInstance, Handle, Position } from "reactflow";
import type { NodeProps, NodeTypes } from "reactflow";
import "reactflow/dist/style.css";
import dagre from "dagre";
import {
  FileText,
  Mail,
  BellRing,
  Calendar,
  CheckCircle2,
  Wallet,
  GraduationCap,
  MessageSquare,
  Phone,
  UserPlus,
  Award,
  ClipboardCheck,
} from "lucide-react";
import { type LucideIcon } from "lucide-react";

type Workflow = {
  key: string;
  title: string;
  description: string;
  icon: LucideIcon;
  nodes: { label: string }[];
};

type AutomationNodeData = {
  title: string;
  subtitle: string;
  Icon: LucideIcon;
  bg: string;
};

const workflows: Workflow[] = [
  {
    key: "enroll-convert",
    title: "Student Enrollment and Lead Conversion",
    description: "From lead capture to enrollment — fully automated.",
    icon: UserPlus,
    nodes: [
      { label: "Lead Form Submission" },
      { label: "Auto-Response Email" },
      { label: "Follow-up Reminder" },
      { label: "Trial Class Scheduling" },
      { label: "Enrollment Notification" },
      { label: "Payment Auto-Collection Setup" },
      { label: "Student Added to LMS" },
    ],
  },
  {
    key: "attendance-progress",
    title: "Attendance Tracking and Progress Reporting",
    description: "Mark attendance, update progress, notify guardians — instantly.",
    icon: ClipboardCheck,
    nodes: [
      { label: "Join Class" },
      { label: "Attendance Marked" },
      { label: "Progress Updated" },
      { label: "Parent Report" },
    ],
  },
  {
    key: "assess-grade-certify",
    title: "Assignment to Assessment and Certification",
    description: "Auto-quiz, AI grading, feedback, and certificates.",
    icon: Award,
    nodes: [
      { label: "Auto-Quiz" },
      { label: "AI Grading" },
      { label: "Feedback" },
      { label: "Certificate" },
    ],
  },
];

export function AutomationWorkflowsSection() {
  const [active, setActive] = useState(0);
  const progressStartRef = useRef<number>(Date.now());

  // Progress to 100% over 8s, no auto-change of workflow
  useEffect(() => {
    progressStartRef.current = Date.now();
    return () => {};
  }, []);

  const activeWorkflow = workflows[active];

  return (
    <section className="bg-[#F5F7FA] py-20 lg:py-28" aria-labelledby="automation-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header row: copy left, illustration right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 mb-10 lg:mb-14">
          <div className="lg:col-span-6">
            <motion.h2
              id="automation-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827]"
            >
              Automation That Works While You Teach
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-[#4B5563] text-base md:text-lg max-w-3xl"
            >
              Reduce manual tasks and reclaim teaching time. Automations handle student onboarding, attendance, assessments, reminders, reporting, and payments so your online academy runs smoothly.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6"
          >
            <Image
              src="https://res.cloudinary.com/dwtmtd0oz/image/upload/t_automations-illustration-transformed/automations-illustration_vh83qf"
              alt="Automations illustration"
              width={960}
              height={720}
              className="w-full h-auto"
              priority
            />
          </motion.div>
        </div>

        {/* Supporting heading */}
        <div className="mb-6">
          <h3 className="font-heading text-xl md:text-2xl font-bold text-[#111827]">
            See how your daily tasks become automated
          </h3>
          <p className="text-sm md:text-base text-[#6B7280] mt-1">
            Each workflow shows a typical task reduced from minutes to milliseconds.
          </p>
        </div>

        {/* Workflow area split: left tabs, right canvas */}
        <motion.div
          key={activeWorkflow.key}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left tabs */}
            <div className="lg:col-span-4">
              <div className="flex flex-col divide-y divide-gray-100">
                {workflows.map((wf, idx) => {
                  const isActive = active === idx;
                  const Icon = wf.icon || ClipboardCheck;
                  return (
                    <button
                      key={wf.key}
                      onClick={() => setActive(idx)}
                      className={`group flex items-start gap-3 text-left w-full py-4 transition-colors ${isActive ? "" : "hover:bg-[#F9FAFB]"}`}
                    >
                      <div className={`shrink-0 w-10 h-10 rounded-xl grid place-items-center ring-1 ${isActive ? "bg-[#FFF3EA] ring-[#FED7AA]" : "bg-[#FFF7ED] ring-[#FFE4D5]"}`}>
                        <Icon className={`w-5 h-5 ${isActive ? "text-[#ED7424]" : "text-[#F59E0B]"}`} />
                      </div>
                      <div className="min-w-0">
                        <div className={`font-heading text-base font-semibold ${isActive ? "text-[#111827]" : "text-[#111827]"}`}>{wf.title}</div>
                        {wf.description && (
                          <div className={`text-sm ${isActive ? "text-[#6B7280]" : "text-[#6B7280]"}`}>{wf.description}</div>
                        )}
                      </div>
                      <div className="ml-auto pt-1">
                        <span className={`inline-block h-2 w-2 rounded-full ${isActive ? "bg-[#ED7424]" : "bg-transparent group-hover:bg-gray-300"}`} />
              </div>
                    </button>
                  );
                })}
            </div>
          </div>
            {/* Right canvas */}
            <div className="lg:col-span-8">
              <div className="mb-3">
                <h4 className="font-heading text-lg md:text-xl font-semibold text-[#111827]">{activeWorkflow.title}</h4>
                <p className="text-sm text-[#6B7280]">Explore the steps and branches in this automation.</p>
              </div>
              <WorkflowCanvas activeKey={activeWorkflow.key} />
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <div className="mt-10 flex">
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#ED7424] text-white font-semibold shadow-md hover:brightness-110 transition-all"
          >
            Build your first automation in minutes
          </a>
        </div>
      </div>
    </section>
  );
}

// Removed unused FlowPreview

export default AutomationWorkflowsSection;

// Auto-layout function using dagre
const getLayoutedElements = (nodes: Node[], edges: Edge[], direction = "TB") => {
  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));
  
  const nodeWidth = 220;
  const nodeHeight = 72;

  dagreGraph.setGraph({ 
    rankdir: direction,
    nodesep: 36,
    ranksep: 96,
  });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  const layoutedNodes = nodes.map((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    return {
      ...node,
      position: {
        x: nodeWithPosition.x - nodeWidth / 2,
        y: nodeWithPosition.y - nodeHeight / 2,
      },
    };
  });

  return { nodes: layoutedNodes, edges };
};

function getFlowData(activeKey: string): { nodes: Node[]; edges: Edge[] } {
  if (activeKey === "enroll-convert") {
    const initialNodes: Node[] = [
      {
        id: "lead-form",
        position: { x: 0, y: 0 },
        data: {
          title: "Lead Form Submission",
          subtitle: "Student shares details",
          Icon: FileText,
          bg: "#FFEADB",
        },
        type: "automation",
        draggable: true,
      },
      {
        id: "auto-email",
        position: { x: 0, y: 0 },
        data: {
          title: "Auto-Response Email",
          subtitle: "Share info and calendar link",
          Icon: Mail,
          bg: "#DCF3FF",
        },
        type: "automation",
        draggable: true,
      },
      {
        id: "follow-reminder",
        position: { x: 0, y: 0 },
        data: {
          title: "Follow-up Reminder",
          subtitle: "If no response in 48 hrs",
          Icon: BellRing,
          bg: "#EAF7E9",
        },
        type: "automation",
        draggable: true,
      },
      {
        id: "whatsapp-discount",
        position: { x: 0, y: 0 },
        data: {
          title: "WhatsApp Follow-up",
          subtitle: "Send discount & booking link",
          Icon: MessageSquare,
          bg: "#FFEADB",
        },
        type: "automation",
        draggable: true,
      },
      {
        id: "trial-class",
        position: { x: 0, y: 0 },
        data: {
          title: "Trial Class Scheduling",
          subtitle: "Auto schedule trial class",
          Icon: Calendar,
          bg: "#DCF3FF",
        },
        type: "automation",
        draggable: true,
      },
      {
        id: "reschedule-reminder",
        position: { x: 0, y: 0 },
        data: {
          title: "Reschedule Reminder",
          subtitle: "No show — nudge to rebook",
          Icon: BellRing,
          bg: "#EAF7E9",
        },
        type: "automation",
        draggable: true,
      },
      {
        id: "enrolled",
        position: { x: 0, y: 0 },
        data: {
          title: "Enrollment Notification",
          subtitle: "Converted to student",
          Icon: CheckCircle2,
          bg: "#EAF7E9",
        },
        type: "automation",
        draggable: true,
      },
      {
        id: "payments",
        position: { x: 0, y: 0 },
        data: {
          title: "Payment Auto-Collection Setup",
          subtitle: "Invoice and subscription billing",
          Icon: Wallet,
          bg: "#FFEADB",
        },
        type: "automation",
        draggable: true,
      },
      {
        id: "payment-retry",
        position: { x: 0, y: 0 },
        data: {
          title: "Payment Retry",
          subtitle: "Failed — retry with reminder",
          Icon: Wallet,
          bg: "#FFEADB",
        },
        type: "automation",
        draggable: true,
      },
      {
        id: "agent-call",
        position: { x: 0, y: 0 },
        data: {
          title: "Agent Call",
          subtitle: "Personal call to assist",
          Icon: Phone,
          bg: "#DCF3FF",
        },
        type: "automation",
        draggable: true,
      },
      {
        id: "receipt-email",
        position: { x: 0, y: 0 },
        data: {
          title: "Receipt Email",
          subtitle: "Send payment receipt",
          Icon: Mail,
          bg: "#DCF3FF",
        },
        type: "automation",
        draggable: true,
      },
      {
        id: "added-lms",
        position: { x: 0, y: 0 },
        data: {
          title: "Student Added to LMS",
          subtitle: "Instant course access",
          Icon: GraduationCap,
          bg: "#DCF3FF",
        },
        type: "automation",
        draggable: true,
      }
    ];
    const initialEdges: Edge[] = [
      { id: "e1", source: "lead-form", target: "auto-email", type: "smoothstep", animated: true, style: { stroke: "#ED7424", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: "#ED7424" } },
      { id: "e2", source: "auto-email", target: "follow-reminder", type: "smoothstep", animated: true, style: { stroke: "#ED7424", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: "#ED7424" } },
      { id: "e3a", source: "follow-reminder", target: "trial-class", label: "Answered", type: "smoothstep", animated: true, style: { stroke: "#ED7424", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: "#ED7424" } },
      { id: "e3b", source: "follow-reminder", target: "whatsapp-discount", label: "No response", type: "smoothstep", animated: true, style: { stroke: "#ED7424", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: "#ED7424" } },
      { id: "e3c", source: "whatsapp-discount", target: "agent-call", label: "Needs help", type: "smoothstep", animated: true, style: { stroke: "#ED7424", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: "#ED7424" } },
      { id: "e3d", source: "whatsapp-discount", target: "trial-class", label: "Booked trial", type: "smoothstep", animated: true, style: { stroke: "#ED7424", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: "#ED7424" } },
      { id: "e4a", source: "trial-class", target: "enrolled", label: "Attended", type: "smoothstep", animated: true, style: { stroke: "#ED7424", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: "#ED7424" } },
      { id: "e4b", source: "trial-class", target: "reschedule-reminder", label: "No show", type: "smoothstep", animated: true, style: { stroke: "#ED7424", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: "#ED7424" } },
      { id: "e4c", source: "reschedule-reminder", target: "trial-class", label: "Rescheduled", type: "smoothstep", animated: true, style: { stroke: "#ED7424", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: "#ED7424" } },
      { id: "e5", source: "enrolled", target: "payments", type: "smoothstep", animated: true, style: { stroke: "#ED7424", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: "#ED7424" } },
      { id: "e6a", source: "payments", target: "added-lms", label: "Success", type: "smoothstep", animated: true, style: { stroke: "#ED7424", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: "#ED7424" } },
      { id: "e6b", source: "payments", target: "receipt-email", label: "Send receipt", type: "smoothstep", animated: true, style: { stroke: "#ED7424", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: "#ED7424" } },
      { id: "e6c", source: "payments", target: "payment-retry", label: "Failed", type: "smoothstep", animated: true, style: { stroke: "#ED7424", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: "#ED7424" } },
      { id: "e6d", source: "payment-retry", target: "payments", label: "Retry", type: "smoothstep", animated: true, style: { stroke: "#ED7424", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: "#ED7424" } },
    ];
    return { nodes: initialNodes, edges: initialEdges };
  }
  if (activeKey === "attendance-progress") {
    const initialNodes: Node[] = [
      { id: "join-class", position: { x: 0, y: 0 }, data: { title: "Join Class", subtitle: "Student starts session", Icon: Calendar, bg: "#DCF3FF" }, type: "automation", draggable: true },
      { id: "attendance", position: { x: 0, y: 0 }, data: { title: "Attendance Marked", subtitle: "Auto check-in", Icon: CheckCircle2, bg: "#EAF7E9" }, type: "automation", draggable: true },
      { id: "progress", position: { x: 0, y: 0 }, data: { title: "Progress Updated", subtitle: "Scores & notes", Icon: FileText, bg: "#FFEADB" }, type: "automation", draggable: true },
      { id: "parent-report", position: { x: 0, y: 0 }, data: { title: "Parent Report", subtitle: "Email/WhatsApp", Icon: Mail, bg: "#DCF3FF" }, type: "automation", draggable: true },
      { id: "absent-followup", position: { x: 0, y: 0 }, data: { title: "Absent Follow-up", subtitle: "Nudge to rejoin", Icon: BellRing, bg: "#EAF7E9" }, type: "automation", draggable: true },
      { id: "reschedule", position: { x: 0, y: 0 }, data: { title: "Reschedule", subtitle: "Offer slots", Icon: Calendar, bg: "#DCF3FF" }, type: "automation", draggable: true },
    ];
    const initialEdges: Edge[] = [
      { id: "ap1", source: "join-class", target: "attendance", type: "smoothstep", animated: true, style: { stroke: "#ED7424", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: "#ED7424" } },
      { id: "ap2", source: "attendance", target: "progress", label: "Present", type: "smoothstep", animated: true, style: { stroke: "#ED7424", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: "#ED7424" } },
      { id: "ap3", source: "attendance", target: "absent-followup", label: "Absent", type: "smoothstep", animated: true, style: { stroke: "#ED7424", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: "#ED7424" } },
      { id: "ap4", source: "absent-followup", target: "reschedule", type: "smoothstep", animated: true, style: { stroke: "#ED7424", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: "#ED7424" } },
      { id: "ap5", source: "reschedule", target: "join-class", label: "Rejoin", type: "smoothstep", animated: true, style: { stroke: "#ED7424", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: "#ED7424" } },
      { id: "ap6", source: "progress", target: "parent-report", type: "smoothstep", animated: true, style: { stroke: "#ED7424", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: "#ED7424" } },
    ];
    return { nodes: initialNodes, edges: initialEdges };
  }
  // assess-grade-certify
  const initialNodes: Node[] = [
    { id: "auto-quiz", position: { x: 0, y: 0 }, data: { title: "Auto-Quiz", subtitle: "Scheduled test", Icon: FileText, bg: "#FFEADB" }, type: "automation", draggable: true },
    { id: "ai-grading", position: { x: 0, y: 0 }, data: { title: "AI Grading", subtitle: "Instant scores", Icon: CheckCircle2, bg: "#EAF7E9" }, type: "automation", draggable: true },
    { id: "feedback", position: { x: 0, y: 0 }, data: { title: "Feedback", subtitle: "Personalized tips", Icon: Mail, bg: "#DCF3FF" }, type: "automation", draggable: true },
    { id: "certificate", position: { x: 0, y: 0 }, data: { title: "Certificate", subtitle: "Auto issued", Icon: GraduationCap, bg: "#DCF3FF" }, type: "automation", draggable: true },
    { id: "remedial", position: { x: 0, y: 0 }, data: { title: "Remedial Plan", subtitle: "Low score path", Icon: BellRing, bg: "#EAF7E9" }, type: "automation", draggable: true },
    { id: "retake", position: { x: 0, y: 0 }, data: { title: "Retake Quiz", subtitle: "After practice", Icon: Calendar, bg: "#DCF3FF" }, type: "automation", draggable: true },
  ];
  const initialEdges: Edge[] = [
    { id: "ag1", source: "auto-quiz", target: "ai-grading", type: "smoothstep", animated: true, style: { stroke: "#ED7424", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: "#ED7424" } },
    { id: "ag2", source: "ai-grading", target: "feedback", label: ">= 70%", type: "smoothstep", animated: true, style: { stroke: "#ED7424", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: "#ED7424" } },
    { id: "ag3", source: "feedback", target: "certificate", type: "smoothstep", animated: true, style: { stroke: "#ED7424", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: "#ED7424" } },
    { id: "ag4", source: "ai-grading", target: "remedial", label: "< 70%", type: "smoothstep", animated: true, style: { stroke: "#ED7424", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: "#ED7424" } },
    { id: "ag5", source: "remedial", target: "retake", type: "smoothstep", animated: true, style: { stroke: "#ED7424", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: "#ED7424" } },
    { id: "ag6", source: "retake", target: "ai-grading", label: "Re-evaluate", type: "smoothstep", animated: true, style: { stroke: "#ED7424", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: "#ED7424" } },
  ];
  return { nodes: initialNodes, edges: initialEdges };
}

function WorkflowCanvas({ activeKey }: { activeKey: string }) {
  const { nodes: initialNodes, edges: initialEdges } = useMemo(() => getFlowData(activeKey), [activeKey]);

  // Apply auto-layout
  const { nodes, edges } = useMemo(() => {
    return getLayoutedElements(initialNodes, initialEdges, "TB");
  }, [initialNodes, initialEdges]);

  const orientedNodes: Node<AutomationNodeData>[] = useMemo(() => {
    return (nodes as Node<AutomationNodeData>[]).map((n) => ({
      ...n,
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    }));
  }, [nodes]);

  // Lock zoom to the fitted value so the whole workflow is visible in 80vh
  const [lockedZoom, setLockedZoom] = useState<number | null>(null);

  // Clamp panning to the content bounds so users don't get lost
  const translateExtent = useMemo(() => {
    const ns = nodes as Node<AutomationNodeData>[];
    if (!ns || ns.length === 0) return [[-1000, -1000], [1000, 1000]] as [[number, number], [number, number]];
    let minX = Number.POSITIVE_INFINITY;
    let maxX = Number.NEGATIVE_INFINITY;
    let minY = Number.POSITIVE_INFINITY;
    let maxY = Number.NEGATIVE_INFINITY;
    for (const n of ns) {
      if (typeof n?.position?.x === "number") {
        minX = Math.min(minX, n.position.x);
        maxX = Math.max(maxX, n.position.x);
      }
      if (typeof n?.position?.y === "number") {
        minY = Math.min(minY, n.position.y);
        maxY = Math.max(maxY, n.position.y);
      }
    }
    const padding = 200;
    const nodeWidth = 240;
    const nodeHeight = 80;
    return [[minX - padding, minY - padding], [maxX + nodeWidth + padding, maxY + nodeHeight + padding]] as [[number, number], [number, number]];
  }, [nodes]);

  const nodeTypes = useMemo<NodeTypes>(() => ({ automation: AutomationNode }), []);

  return (
    <div className="w-full">
      <div style={{ height: "80vh" }} className="bg-white">
        <ReactFlow
          nodes={orientedNodes}
          edges={edges}
          nodeTypes={nodeTypes}
          zoomOnScroll={false}
          zoomOnPinch={false}
          zoomOnDoubleClick={false}
          panOnDrag={true}
          panOnScroll={false}
          nodesDraggable={true}
          minZoom={lockedZoom ?? 0.2}
          maxZoom={lockedZoom ?? 2}
          translateExtent={translateExtent}
          defaultEdgeOptions={{
            type: "smoothstep",
            animated: true,
            style: { stroke: "#ED7424", strokeWidth: 2 },
            markerEnd: { type: MarkerType.ArrowClosed, color: "#ED7424" },
          }}
          onInit={(instance: ReactFlowInstance) => {
            // Fit entire graph into view
            instance.fitView({ padding: 0.2, includeHiddenNodes: true, duration: 300 });
            // Force specific zoom for the enrollment flow
            const targetZoom = activeKey === "enroll-convert" ? 1 : instance.getZoom();
            const { x, y } = instance.getViewport();
            instance.setViewport({ x, y, zoom: targetZoom });
            setLockedZoom(targetZoom);
          }}
        >
          <Background variant={BackgroundVariant.Dots} gap={16} size={1} color="#e5e7eb" />
        </ReactFlow>
      </div>
    </div>
  );
}

function AutomationNode({ data }: NodeProps<AutomationNodeData>) {
  const { title, subtitle, Icon, bg } = data as AutomationNodeData;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="rounded-2xl shadow-lg ring-1 ring-black/5 px-4 py-3 bg-white/90 backdrop-blur-sm cursor-grab active:cursor-grabbing"
      style={{ width: 220 }}
    >
      <Handle type="target" position={Position.Top} style={{ visibility: "hidden" }} />
      <Handle type="source" position={Position.Bottom} style={{ visibility: "hidden" }} />
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center ring-1" style={{ backgroundColor: bg, color: "#ED7424", borderColor: "#ffffff80" }}>
          <Icon className="w-5 h-5" />
        </div>
        <div className="min-w-0">
          <div className="font-heading text-sm font-semibold text-[#111827] leading-snug">{title}</div>
          <div className="text-[11px] text-[#6B7280] leading-snug">{subtitle}</div>
        </div>
      </div>
    </motion.div>
  );
}

