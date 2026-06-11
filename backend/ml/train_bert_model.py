import pandas as pd
import joblib

from sentence_transformers import SentenceTransformer

bert_model = SentenceTransformer(
    "all-MiniLM-L6-v2",
    device="cpu"
)

from sklearn.model_selection import train_test_split
from sklearn.svm import LinearSVC

from sklearn.metrics import (
    accuracy_score,
    classification_report,
    confusion_matrix
)

# =========================
# LOAD DATASET
# =========================
df = pd.read_csv("newexamplesadded.csv")

# Remove missing values
df = df.dropna(subset=["subject", "body", "priority"])

# Combine subject + body
df["text"] = (
    df["subject"].astype(str)
    + " "
    + df["body"].astype(str)
)

# Features and labels
X = df["text"]
y = df["priority"]

print("\nDataset Loaded Successfully!")
print("\nPriority Distribution:\n")
print(df["priority"].value_counts())

# =========================
# LOAD BERT MODEL
# =========================

print("\nLoading BERT model...\n")

bert_model = SentenceTransformer(
    "all-MiniLM-L6-v2"
)

# =========================
# GENERATE EMBEDDINGS
# =========================

print("Generating embeddings...\n")

X_embeddings = bert_model.encode(
    X.tolist(),
    show_progress_bar=True
)

# =========================
# TRAIN TEST SPLIT
# =========================

X_train, X_test, y_train, y_test = train_test_split(
    X_embeddings,
    y,
    test_size=0.2,
    random_state=42,
    stratify=y
)

# =========================
# TRAIN CLASSIFIER
# =========================

print("\nTraining model...\n")

model = LinearSVC(
    class_weight="balanced",
    max_iter=10000
)

model.fit(X_train, y_train)

# =========================
# EVALUATE MODEL
# =========================

y_pred = model.predict(X_test)

accuracy = accuracy_score(
    y_test,
    y_pred
)

print(f"\nModel Accuracy: {accuracy * 100:.2f}%")

print("\nClassification Report:\n")
print(
    classification_report(
        y_test,
        y_pred
    )
)

print("\nConfusion Matrix:\n")
print(
    confusion_matrix(
        y_test,
        y_pred
    )
)

# =========================
# SAVE MODEL
# =========================

joblib.dump(
    model,
    "priority_model.pkl"
)

print("\nPriority model saved successfully!")

print("\nBERT model will load dynamically during prediction.")