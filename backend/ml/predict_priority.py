import os

os.environ["HF_HUB_DISABLE_SYMLINKS_WARNING"] = "1"
import sys
import joblib

from sentence_transformers import SentenceTransformer
import logging

logging.getLogger("sentence_transformers").setLevel(logging.ERROR)

# =========================
# LOAD TRAINED CLASSIFIER
# =========================

import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

model_path = os.path.join(
    BASE_DIR,
    "priority_model.pkl"
)

model = joblib.load(model_path)

# =========================
# LOAD BERT MODEL
# =========================

bert_model = SentenceTransformer(
    "all-MiniLM-L6-v2",
    device="cpu"
)
# =========================
# GET INPUT TEXT
# =========================

text = sys.argv[1]

# =========================
# GENERATE EMBEDDING
# =========================

embedding = bert_model.encode([text])

# =========================
# PREDICT PRIORITY
# =========================

prediction = model.predict(embedding)

# =========================
# PRINT RESULT
# =========================

print(prediction[0])