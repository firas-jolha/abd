// =====================================================================
//  COURSE CONTENT — edit this file only. The pages read everything here.
//  Links are relative to the site root, so "materials/slides/w01.pdf"
//  points to the file you put in materials/slides/.
//  Leave a link as "" to show it as "coming soon".
// =====================================================================

window.COURSE = {
  code: "ABDS-S27",
  title: "Advanced Big Data Systems (Big Data Engineering)",
  term: "Spring 2027",
  institution: "Innopolis University",
  language: "English",
  summary:
    "How big data systems work inside: distributed storage, columnar formats and lakehouse tables, " +
    "distributed query processing and execution engines, stream processing and change data capture, " +
    "distributed machine learning and vector search, and governance (lineage, data quality, privacy). " +
    "The course has two tracks. Track F (Foundations) starts with four bridge weeks and has weekly hands-on labs " +
    "on a shared 4-node cluster (HDFS, MinIO, Spark, Iceberg, Trino, ClickHouse, Kafka, Flink, Cassandra, MongoDB, PostgreSQL), " +
    "ending in an applied lakehouse paper. Track R (Research) reproduces and extends a published systems result. " +
    "Both tracks attend the same lectures from week 5 and sit the same midterm and final. " +
    "A placement test in week 1 sets your track; you can switch until the end of week 3.",

  instructor: {
    name: "Firas Jolha",
    role: "Primary Instructor",
    email: "f.jolha@innopolis.ru",
    office: "Online (TG: @FirasJolha), Office hours: by booking", 
    // Saturday 14:00–15:30
  },

  // Teaching assistants (optional; delete entries you don't need)
  tas: [
    { name: "Adel Azzi", email: "a.azzi@innopolis.university" },
  ],

  // Quick links shown as buttons at the top
  // Quick links shown as buttons at the top
  links: [
    { label: "Course repository", url: "https://firas-jolha.github.io/abd/" },
    { label: "Cluster access guide (Lab 00)", url: "materials/labs/lab-00.md" },
    { label: "Project briefs", url: "materials/project/index.md" },
    { label: "Telegram channel", url: "" },//https://t.me/abd_s27
    { label: "Submission form", url: "" },
  ],

  // Newest first. date: YYYY-MM-DD
  announcements: [
    { date: "2027-01-18", text: "Please check the course repository for the latest updates and materials." }
    // { date: "2026-11-20", text: "Lab 6 deadline moved to 29 November, 23:59." },
    // { date: "2026-09-01", text: "Welcome to the course. Read the syllabus before the first lab." },
  ],
// One entry per week. Lectures 1–4 are Track F bridge lectures (optional for Track R, but on the midterm).
  // From week 5 both tracks attend. Labs are for Track F; for Track R the lab slot is project time.
  schedule: [
    { week: 1, date: "2027-01-20", topic: "Placement test. Distributed systems basics: scale-out, failures, HDFS and object storage (F bridge)",
      slides: "", lab: "materials/labs/lab-01.md", reading: "", recording: "",
      notes: "Read: DDIA ch. 1; McSherry et al., Scalability! But at what COST? (HotOS 2015). Lab 00 before the lab." },
    { week: 2, date: "2027-01-27", topic: "Spark and Spark SQL: RDDs, DataFrames, the shuffle (F bridge)",
      slides: "", lab: "materials/labs/lab-02.md", reading: "", recording: "",
      notes: "Read: Zaharia et al., RDDs (NSDI 2012); Armbrust et al., Spark SQL (SIGMOD 2015). Track R: teams registered." },
    { week: 3, date: "2027-02-03", topic: "NoSQL data models: wide-column, document, graph (F bridge)",
      slides: "", lab: "materials/labs/lab-03.md", reading: "", recording: "",
      notes: "Read: DeCandia et al., Dynamo (SOSP 2007); Lakshman and Malik, Cassandra (LADIS 2009). Track F: teams registered. Last week to switch tracks." },
    { week: 4, date: "2027-02-10", topic: "Kafka basics and the lakehouse idea: Parquet and Apache Iceberg (F bridge)",
      slides: "", lab: "materials/labs/lab-04.md", reading: "", recording: "",
      notes: "Read: Kreps et al., Kafka (NetDB 2011); Armbrust et al., Lakehouse (CIDR 2021). Track R: project proposal due." },
    { week: 5, date: "2027-02-17", topic: "Columnar storage internals and table formats: Parquet, Iceberg, Delta Lake",
      slides: "", lab: "materials/labs/lab-05.md", reading: "", recording: "",
      notes: "Read: Melnik et al., Dremel (VLDB 2010); Zeng et al., Columnar Storage Formats (VLDB 2024)." },
    { week: 6, date: "2027-02-24", topic: "Distributed query processing and optimization: joins, skew, cost-based and adaptive optimization",
      slides: "", lab: "materials/labs/lab-06.md", reading: "", recording: "",
      notes: "Read: Leis et al., How Good Are Query Optimizers, Really? (VLDB 2015); Sethi et al., Presto (ICDE 2019). Track F: project proposal due." },
    { week: 7, date: "2027-03-03", topic: "Execution engines: vectorized execution vs. code generation (DuckDB, ClickHouse, Velox, Spark)",
      slides: "", lab: "materials/labs/lab-07.md", reading: "", recording: "",
      notes: "Read: Boncz et al., MonetDB/X100 (CIDR 2005); Kersten et al., Compiled and Vectorized Queries (VLDB 2018)." },
    { week: 8, date: "2027-03-10", topic: "Midterm (weeks 1–7, both tracks)",
      slides: "", lab: "", reading: "", recording: "", notes: "No lab this week." },
    { week: 9, date: "2027-03-17", topic: "Stream processing semantics: event time, windows, watermarks, exactly-once",
      slides: "", lab: "materials/labs/lab-09.md", reading: "", recording: "",
      notes: "Read: Akidau et al., The Dataflow Model (VLDB 2015); Carbone et al., Apache Flink (2015). Track R: reproduction results in the lab slot." },
    { week: 10, date: "2027-03-24", topic: "Streaming lakehouse: change data capture, Flink/Spark to Iceberg, real-time OLAP",
      slides: "", lab: "materials/labs/lab-10.md", reading: "", recording: "",
      notes: "Read: Carbone et al., State Management in Apache Flink (VLDB 2017); Wang et al., Consistency and Completeness in Kafka Streams (SIGMOD 2021). Track F: midway check (pipeline running end to end)." },
    { week: 11, date: "2027-03-31", topic: "Distributed machine learning: data and model parallelism, parameter servers, Ray, PyTorch DDP",
      slides: "", lab: "materials/labs/lab-11.md", reading: "", recording: "",
      notes: "Read: Li et al., Parameter Server (OSDI 2014); Moritz et al., Ray (OSDI 2018); Li et al., PyTorch Distributed (VLDB 2020)." },
    { week: 12, date: "2027-04-07", topic: "Vector data and LLM pipelines: embeddings, HNSW and IVF-PQ, retrieval over a lakehouse",
      slides: "", lab: "materials/labs/lab-12.md", reading: "", recording: "",
      notes: "Read: Malkov and Yashunin, HNSW (TPAMI 2020); Jégou et al., Product Quantization (TPAMI 2011). Track R: draft paper due." },
    { week: 13, date: "2027-04-14", topic: "Cloud-native data systems and distributed transactions: storage/compute separation, Raft, Spanner",
      slides: "", lab: "materials/labs/lab-13.md", reading: "", recording: "",
      notes: "Read: Dageville et al., Snowflake (SIGMOD 2016); Verbitski et al., Aurora (SIGMOD 2017); Corbett et al., Spanner (OSDI 2012). Track F: draft paper due." },
    { week: 14, date: "2027-04-21", topic: "Governance at scale: lineage, data quality and contracts, access control, differential privacy",
      slides: "", lab: "materials/labs/lab-14.md", reading: "", recording: "",
      notes: "Read: Schelter et al., Automating Large-Scale Data Quality Verification (VLDB 2018); Dwork and Roth, ch. 1–3." },
    { week: 15, date: "2027-04-28", topic: "Final exam (weeks 9–14) and project defenses",
      slides: "", lab: "", reading: "", recording: "",
      notes: "Final paper (6-page IEEE), artifact repository tag and 15-minute defense, both tracks." },
  ],



  // Assessment breakdown (weights should add up to 100).
  // Track F is shown here; Track R weights are in the policies below.
  grading: [
    { item: "Lab tests (Track F, practical, weekly)", weight: 15 },
    { item: "Paper summaries (Track F, weekly)", weight: 10 },
    { item: "Midterm exam", weight: 15 },
    { item: "Final exam", weight: 20 },
    { item: "Project: proposal", weight: 3 },
    { item: "Project: midway check", weight: 7 },
    { item: "Project: final paper and artifact", weight: 22 },
    { item: "Project: defense", weight: 8 },
  ],

  
  // Extra material grouped by heading
  resources: [
    { group: "Books", items: [
      { label: "Designing Data-Intensive Applications, Martin Kleppmann (main book)", url: "" },
      { label: "Hadoop: The Definitive Guide, 4th ed., Tom White (2015)", url: "" },
      { label: "The Enterprise Big Data Lake, Alex Gorelik (2019)", url: "" },
      { label: "Practical Enterprise Data Lake Insights, Saurabh Gupta and Venkata Giri (2018)", url: "" },
      { label: "The Algorithmic Foundations of Differential Privacy, Cynthia Dwork and Aaron Roth (2014)", url: "https://www.cis.upenn.edu/~aaroth/Papers/privacybook.pdf" },
    ]},
    { group: "Papers: storage, batch and query processing", items: [
      { label: "Scalability! But at what COST?, McSherry et al. (HotOS 2015)", url: "" },
      { label: "Fair Benchmarking Considered Difficult, Raasveldt et al. (DBTest 2018)", url: "" },
      { label: "Resilient Distributed Datasets, Zaharia et al. (NSDI 2012)", url: "" },
      { label: "Spark SQL, Armbrust et al. (SIGMOD 2015)", url: "" },
      { label: "Dynamo, DeCandia et al. (SOSP 2007)", url: "" },
      { label: "Cassandra, Lakshman and Malik (LADIS 2009)", url: "" },
      { label: "Dremel, Melnik et al. (VLDB 2010)", url: "" },
      { label: "Delta Lake, Armbrust et al. (VLDB 2020)", url: "" },
      { label: "Lakehouse, Armbrust et al. (CIDR 2021)", url: "" },
      { label: "An Empirical Evaluation of Columnar Storage Formats, Zeng et al. (VLDB 2024)", url: "" },
      { label: "How Good Are Query Optimizers, Really?, Leis et al. (VLDB 2015)", url: "" },
      { label: "Presto: SQL on Everything, Sethi et al. (ICDE 2019)", url: "" },
      { label: "MonetDB/X100, Boncz et al. (CIDR 2005)", url: "" },
      { label: "Everything You Always Wanted to Know About Compiled and Vectorized Queries, Kersten et al. (VLDB 2018)", url: "" },
      { label: "Velox, Pedreira et al. (VLDB 2022)", url: "" },
    ]},
    { group: "Papers: streaming, ML, vectors, cloud and governance", items: [
      { label: "Kafka: a Distributed Messaging System for Log Processing, Kreps et al. (NetDB 2011)", url: "" },
      { label: "The Dataflow Model, Akidau et al. (VLDB 2015)", url: "" },
      { label: "Apache Flink: Stream and Batch Processing in a Single Engine, Carbone et al. (2015)", url: "" },
      { label: "State Management in Apache Flink, Carbone et al. (VLDB 2017)", url: "" },
      { label: "Consistency and Completeness: Rethinking Distributed Stream Processing in Apache Kafka, Wang et al. (SIGMOD 2021)", url: "" },
      { label: "Scaling Distributed Machine Learning with the Parameter Server, Li et al. (OSDI 2014)", url: "" },
      { label: "Ray, Moritz et al. (OSDI 2018)", url: "" },
      { label: "PyTorch Distributed, Li et al. (VLDB 2020)", url: "" },
      { label: "HNSW, Malkov and Yashunin (TPAMI 2020)", url: "" },
      { label: "Product Quantization for Nearest Neighbor Search, Jégou et al. (TPAMI 2011)", url: "" },
      { label: "Retrieval-Augmented Generation, Lewis et al. (NeurIPS 2020)", url: "" },
      { label: "The Snowflake Elastic Data Warehouse, Dageville et al. (SIGMOD 2016)", url: "" },
      { label: "Amazon Aurora, Verbitski et al. (SIGMOD 2017)", url: "" },
      { label: "In Search of an Understandable Consensus Algorithm (Raft), Ongaro and Ousterhout (2014)", url: "https://raft.github.io/" },
      { label: "Spanner, Corbett et al. (OSDI 2012)", url: "" },
      { label: "Automating Large-Scale Data Quality Verification, Schelter et al. (VLDB 2018)", url: "" },
    ]},
    { group: "Course materials", items: [
      { label: "Lab 00: Environment and Conventions (read before Lab 01)", url: "materials/labs/lab-00.md" },
      { label: "Project overview, milestones and grading", url: "materials/project/index.md" },
      { label: "Track F project brief: applied systems paper", url: "materials/project/track-f.md" },
      { label: "Track R project brief: reproduce and extend", url: "materials/project/track-r.md" },
      { label: "Writing the paper: structure, checklist, rubric", url: "materials/project/paper.md" },
      { label: "Project templates: proposal, midway report, artifact README", url: "materials/project/templates.md" },
      { label: "IEEE conference paper templates", url: "https://www.ieee.org/conferences/publishing/templates.html" },
    ]},
    { group: "Documentation", items: [
      { label: "Apache Hadoop (HDFS, YARN)", url: "https://hadoop.apache.org/docs/stable/" },
      { label: "MinIO client (mc)", url: "https://min.io/docs/minio/linux/reference/minio-mc.html" },
      { label: "Apache Spark", url: "https://spark.apache.org/docs/latest/" },
      { label: "Apache Iceberg", url: "https://iceberg.apache.org/docs/latest/" },
      { label: "Trino", url: "https://trino.io/docs/current/" },
      { label: "ClickHouse", url: "https://clickhouse.com/docs" },
      { label: "DuckDB", url: "https://duckdb.org/docs/" },
      { label: "Apache Kafka", url: "https://kafka.apache.org/documentation/" },
      { label: "Apache Flink", url: "https://nightlies.apache.org/flink/flink-docs-stable/" },
      { label: "Debezium", url: "https://debezium.io/documentation/" },
      { label: "Apache Cassandra", url: "https://cassandra.apache.org/doc/latest/" },
      { label: "MongoDB", url: "https://www.mongodb.com/docs/manual/" },
      { label: "pgvector", url: "https://github.com/pgvector/pgvector" },
      { label: "FAISS", url: "https://github.com/facebookresearch/faiss/wiki" },
      { label: "OpenLineage", url: "https://openlineage.io/docs/" },
    ]},
  ],


  
  // Course policies, one paragraph each
  policies: [
    "Two tracks. Track F (Foundations): four bridge weeks, weekly labs with a 30-minute practical test, weekly paper summaries, and an applied lakehouse paper. Track R (Research): no lab tasks; the lab slot is project time; the project reproduces and extends a published systems result. The week 1 placement test sets your default track; you can switch until the end of week 3.",
    "Track R grading: midterm 15%, final exam 20%, project 65% (proposal 5, reproduction results in week 9 15, final paper and artifact 35, defense 10). Track F grading is in the table above.",
    "Exams: both tracks sit the same midterm (week 8, weeks 1–7) and final (week 15, weeks 9–14). They test concepts and reasoning about systems, not tool syntax. Track R students skip the bridge lectures but the midterm covers them; review topics are on the lectures page.",
    "Lab tests are hands-on: 8 tasks on the cluster in 30 minutes, done individually under your own student number and personal object names (Lab 00, section 6), even though your team shares one account. Results you leave on the cluster are checked after the test, so do not delete them until grades are published.",
    "Paper summaries (Track F) are due before the next lecture. One page on one of the week's core papers: the problem, the key idea, the main result, and one limitation you see.",
    "Project: teams of 3–4 students of the same track with declared roles and a contribution log. Deliverables: a 6-page IEEE paper, a reproducible artifact (repository that reruns every figure and table), and a 15-minute defense in which every member answers questions about every part.",
    "Late work loses 10% per day, up to three days. After that it is not accepted unless you have an approved extension.",
    "The lab cluster is shared. Use 2 executors × 2 cores × 2 GB unless a lab says otherwise, stop your jobs when you finish, don't leave long-running streams open overnight, and always remove Debezium connectors and replication slots at the end of Lab 10.",
    "You may discuss labs with classmates, but lab test answers, summaries and project code and text you submit must be your own (your team's, for the project). If you use an AI assistant, say how at the end of the document; you are responsible for every claim and number.",
    "Late work is not accepted unless you have an approved extension.",
    "You may discuss labs with classmates, but the code and report you submit must be your own. If you use an AI assistant, say how in your report.",
  ]
  // [
  //   "Late work loses 10% per day, up to three days. After that it is not accepted unless you have an approved extension.",
  //   "You may discuss labs with classmates, but the code and report you submit must be your own. If you use an AI assistant, say how in your report.",
  // ],
};
